import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import { auth } from "../configs";
import { useState } from "react";
import { useRouter } from "next/router";
const login = () => {
  signInWithEmailAndPassword(auth, "test@test.com", "password");
};
const logout = () => {
  signOut(auth);
};

const CurrentUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
  return <button onClick={() => {router.push("/"); }}>Log in</button>;
};

export default CurrentUser;