

import {
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../configs";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SignIn.module.scss";
import Image from "next/image";
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

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  async function loadIngredients() {

   const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef, "ingredients");
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        ingredients: arrayUnion({
          image: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
          name: "Upload Photo",
          index: "0",
        }),
      });
       router.push("/ingredients");
    }
    else
    {
      await setDoc(docRef, {
        ingredients: arrayUnion({
          image: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
          name: "Upload Photo",
          index: "0",
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
          createUserWithEmailAndPassword(email, password).then(() => {
            if (auth.currentUser) {
              loadIngredients();
            } else {
              setErrorMsg(true);
            }
          });
        }}
      >
        Sign Up
      </button>
      {errorMsg && <p style={{ color: "red" }}>Invalid email or password</p>}

      <p>
        Already have an account?{" "}
        <a
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          {" "}
          Sign In
        </a>
      </p>
    </div>
  );
};
export default Register;
