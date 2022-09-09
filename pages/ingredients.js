import Heading from "../comps/Heading";
import Form from "../comps/Form";
import Head from "next/head";
import Navbar from "../comps/Navbar";
import { useState, useEffect, createRef, useRef } from "react";
import styles from "../styles/Ingredients.module.scss";
import { faSquarePlus, faSliders } from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../configs";
import Delete from "../comps/Delete";
import Router from "next/router";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ingredients() {
  const [form, setForm] = useState("");

  const [imgArr, setImgArr] = useState([{}]);
  const [isShown, setIsShown] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [myStyle, setMyStyle] = useState(false);
  const [thingsElementsDiv, setThingsElementsDiv] = useState("");
  const [docRef, setDocRef] = useState();
  const [isUser, setIsUser] = useState(false);
  const [selectedLength, setSelectedLength] = useState(0);

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
      loadIngredients();
    }
  }, [isUser]);

  async function loadIngredients() {
    const docSnap = await getDoc(docRef, "ingredients");
    if (docSnap.exists()) {
      setImgArr(docSnap.data().ingredients);
    }
  }

  function handleChange(e) {
    setForm(e.target.value);
  }

  async function getResponse() {
    const params = new URLSearchParams({ q: form });
    const response = await fetch(
      `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${params}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "29a63a7413msh8378b61a2e11cf3p192e62jsn53d83f1651fe",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      }
    );

    const data = await response.json();

    return {
      name: data.parsed[0].food.label,
      image: data.parsed[0].food.image,
    };
  }
  const clickHandler = async (e) => {
    e.preventDefault();
    //prevents the user from adding the same ingredient twice
    const check = imgArr.find((item) => item.name === form);
    if (check) {
      alert("You already have this ingredient");
      return;
    }

    try {
      //get response from edamam api
      const newImg = await getResponse();
      //redefining uid and docRef because unable to figure out how to make them global
      const uid = auth.currentUser.uid;
      const docRef = doc(db, "users", uid);
      let arrId = nanoid();

      await updateDoc(
        docRef,
        "ingredients",
        arrayUnion({
          name: newImg.name,
          image: newImg.image,
          index: arrId,
        })
      );

      setImgArr([
        ...imgArr,
        { name: newImg.name, image: newImg.image, index: arrId },
      ]);
    } catch (err) {
      console.error(err);
      alert("Please enter a valid ingredient");
    }
  };
  //returns array with image of ingredients

  function sendProps() {
    Router.push({
      pathname: "/recipes",
      query: {
        selectedIngredients,
        imgArr,
      },
    });
  }

  const handleSelect = (id) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [id]: !prevState[id],
    }));
    if (myStyle[id]) {
      setSelectedLength(selectedLength - 1);
    }
    if (!myStyle[id]) {
      setSelectedLength(selectedLength + 1);
    }
  };

  const selectItem = (thing, id) => {
    handleSelect(id);
    setSelectedIngredients([...selectedIngredients, thing.name]);
  };

  const deleteBtn = async (id) => {
    const uid = auth.currentUser.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef, "ingredients");
    const arr = docSnap.data().ingredients;
    const newArr = arr.filter((item) => item.index !== id);
    await updateDoc(docRef, "ingredients", newArr);
    setImgArr(newArr);
  };

  const editBtn = ( ) => {

      isShown ? setIsShown(false) : setIsShown(true)
    }

  const thingsElements = imgArr.map((thing, id) => {
    return (
      <div
        className={`${id} ${styles.ingredientItem}`}
        key={id}
        style={{
          border: myStyle[`${id}`] ? "5px solid #36175E" : "3px solid #cfc1e9",
        }}
        onClick={() => selectItem(thing, id)}
      onMouseEnter={() => {
          setThingsElementsDiv(id);
        }}

      >
        <img src={thing.image} alt={thing.name} />
        {isShown && id === thingsElementsDiv && (
          <Delete
            index={thing.index}
            obj={thing}
            imgArr={imgArr}
            docRef={docRef}
            setImgArr={setImgArr}
          />
        )}
      </div>
    );
  });

  return (
    <div className={`${styles.container} `}>
      <Head>
        <title>Ingredients</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar favoritesPg={"/favorites"} ingredients={"/ingredients"} />
      <main className={styles.main}>
        <Heading
          heading="Ingredients"
          info="select the ingredients you would like to use"
        />
        <div className={styles.formContainer}>
                  <Form
          name="Search Ingredients..."
          onChange={handleChange}
          value={form}
          placeholder="Search Ingredients..."
          clicked={clickHandler}
          editBtn={editBtn}
          isShown={isShown}
          icon={faSquarePlus}
        />
         </div>


        <div
          className={`grid lg:w-9/12 grid-cols-3 lg:grid-cols-5  gap-4 pt-24 mb-12 pb-24 ${styles.ingredientContainer}`}
        >
          {thingsElements}
        </div>
        {selectedLength > 0 && (
          <div className={styles.recipeBtn}>
            <button onClick={() => sendProps()}> Magic Recipe</button>
          </div>
        )}
      </main>
    </div>
  );
}
