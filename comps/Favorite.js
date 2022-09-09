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
const   Favorite = (props) => {

      async function addFavorite(recipe, id) {
        const docSnap = await getDoc(props.docRef);

        const addFavetoDB = async () => {
          if (docSnap.exists()) {
            await updateDoc(props.docRef, {
              favorites: arrayUnion(recipe),
            });
          } else {
            await setDoc(props.docRef, {
              favorites: arrayUnion(recipe),
            });
          }
        };

        const removeFavfromDB = async () => {
          await updateDoc(props.docRef, {
            favorites: arrayRemove({
              fave: true,
              id: recipe.id,
              image: recipe.image,
              title: recipe.title,
            }),
          });
        };
        if (props.recipesApi[id].fave === false) {
          props.recipesApi[id].fave = true;
          props.setIsFave(true);
          addFavetoDB();
        } else {
         props.setIsFave(false);
          props.recipesApi[id].fave = false;
          removeFavfromDB();
        }
      }
  return (
    <div onClick={() => addFavorite(props.recipe, props.id)}>
      {props.isFave ? (
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
  );
};
export default Favorite;