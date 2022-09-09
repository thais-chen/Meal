import Heading from "../comps/Heading";
 import Head from "next/head";
import Navbar from "../comps/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
 import { db, auth } from "../configs";
import styles from "../styles/Recipes.module.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//icons
//import faHeart from regular faHeart
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
  setDoc,
  query,
  where,
  getFirestore,
  arrayRemove,
} from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

export default function Recipes() {
  const [docRef, setDocRef] = useState();
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();
  const [recipesApi, setRecipesApi] = useState([]);
  const {
    query: { selectedIngredients, imgArr, mealType },
  } = router;

  const [isFave, setIsFave] = useState(false);
  const props = {
    selectedIngredients,
    imgArr,
    mealType,
  };

  // clickHandler();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDocRef(doc(db, "users", user.uid));
        setIsUser(true);
      } else {
        Router.push("/");
      }
    });
  }, [auth]);

  useEffect(() => {
    if (isUser) {
      clickHandler();
    }
  }, [isUser]);

  const getRecipes = async () => {
    const params = new URLSearchParams({
      ingredients: props.selectedIngredients,
      number: "10",
    });
    const res = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?${params}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      }
    );

    if (!res.ok) {
      throw res;
    }

    const data = await res.json();

    return data;
  };

  const clickHandler = async () => {
    try {
      const newRecipes = await getRecipes();

      const newRecipeFave = newRecipes.map((recipe) => {
        return {
          id: recipe.id,
          image: recipe.image,
          title: recipe.title,
          fave: false,
        };
      });
      setRecipesApi(newRecipeFave);
      console.log(newRecipeFave);
    } catch (err) {
      console.error(err);
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  function recipeLink(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        openInNewTab(response.sourceUrl);
      })
      .catch((err) => console.error(err));
  }

  function sendProps() {
    console.log(obj);
    Router.push({
      pathname: "/favorites",
      query: {
        obj,
        ugh,
      },
    });
  }

  const recipeItem = recipesApi.map((recipe, index) => {
    return (
      <div key={index} className={styles.recipeItem}>
        <img
          src={recipe.image}
          alt={recipe.title}
          onClick={(e) => {
            e.stopPropagation();
            recipeLink(recipe.id);
          }}
        />
        <div className="flex justify-between">
          <p className={styles.recipeTitle}>{recipe.title}</p>

          <div onClick={() => addFavorite(recipe, index)}>
            {recipe.fave ? (
              <FontAwesomeIcon
                icon={faSolidHeart}
                //faLightHeart

                style={{
                  color: "darkblue",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faRegular}
                style={{
                  color: "darkblue",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  });

  async function addFavorite(recipe, id) {
    const docSnap = await getDoc(docRef);

    const addFavetoDB = async () => {
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          favorites: arrayUnion(recipe),
        });
      } else {
        await setDoc(docRef, {
          favorites: arrayUnion(recipe),
        });
      }
    };

    const removeFavfromDB = async () => {
      await updateDoc(docRef, {
        favorites: arrayRemove({
          fave: true,
          id: recipe.id,
          image: recipe.image,
          title: recipe.title,
        }),
      });
    };
    if (recipesApi[id].fave === false) {
      recipesApi[id].fave = true;
      setIsFave(true);

      console.log("added to favorites");
      addFavetoDB();
    } else {
      setIsFave(false);
      console.log("removed from favorites");
      recipesApi[id].fave = false;
      removeFavfromDB();
    }
  }

  return (
    <div className={`${styles.container} `}>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        favoritesPg={"/favorites"}
        ingredients={"/ingredients"}
      />
      <main className={styles.main}>
        <Heading heading="Recipes" />

        <div className="grid md:grid-cols-4 gap-4 mt-4 mb-24  justify-items-center">
          {recipeItem}
        </div>
      </main>
    </div>
  );
}
