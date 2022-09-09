
import {

  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import styles from "../styles/Delete.module.scss";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Delete = (props) => {
//find the index of the ingredient to be deleted by using the index property of the ingredient object
const index = props.imgArr.findIndex(ingredient => ingredient.index === props.index);



    const deleteIngredient = async () => {
         props.imgArr.splice(index, 1);
         props.setImgArr(props.imgArr);
      await updateDoc(props.docRef, {
        ingredients: arrayRemove({
          image: props.obj.image,
          index: props.obj.index,
          name: props.obj.name,
        }),
      });
    };

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faTrashCan}
        size="xl"
        className={styles.icon}
        onClick={deleteIngredient}
      />
    </div>
  );
}
export default Delete;