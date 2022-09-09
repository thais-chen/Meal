/* import {
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../configs";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SignIn.module.scss";
import {
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../configs";


const testSignIn = () => {
  const email = "octopus123@gmail.com"
  const password= "123456"
   const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  async function loadIngredients() {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef, "ingredients");
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        ingredients: arrayUnion({
          image:
            "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
          name: "Egg",
          index: "86cGu49svLPNCFXUZ97Rc",
        }),
      });
      router.push("/ingredients");
    }
  }
signInWithEmailAndPassword(email, password).then(loadIngredients)

};
export default testSignIn;
 */