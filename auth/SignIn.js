import {
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../configs";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SignIn.module.scss";
import testSignIn from "./testSignin";
import {
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../configs";
import Register from "./Register";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
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

  return (
    <div className={styles.container}>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          signInWithEmailAndPassword(email, password).then(() => {
            if (auth.currentUser) {
              loadIngredients();
            } else {
              setErrorMsg(true);
            }
          });
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          signInWithEmailAndPassword("octopus123@outlook.com", "squirtle").then(
            () => {
              if (auth.currentUser) {
                loadIngredients();
              }
            }
          );
        }}
      >
        {" "}
        DEMO{" "}
      </button>
      {errorMsg && <p style={{ color: "red" }}>Incorrect email or password</p>}
      <p>
        Don't have an account?{" "}
        <a
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/signUp");
          }}
        >
          {" "}
          Sign Up
        </a>
      </p>
      {/*   {errorMsg && <p>Invalid email or password</p>}
      <p><b> Don't have an account? </b> <span style={{color:'red'}} onClick={() => {props.setHasAccount(false)}}>Sign Up</span></p> */}
    </div>
  );
};
export default SignIn;
