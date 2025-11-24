"use client";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // google sign in
  const googleSignIn = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign up with email and password
  const signUpWithEmailPass = (email, pass) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sign in with email and password
  const signInWithEmailPass = (email, pass) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // update profile
  const updatePfoileFunc = (updateUser) => {
    setAuthLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: updateUser.displayName,
      photoURL: updateUser.photoURL,
    });
  };

  // sign out
  const signOutFunc = () => {
    return signOut(auth);
  };

  // observer for login user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    authLoading,
    setAuthLoading,
    googleSignIn,
    signOutFunc,
    updatePfoileFunc,
    signUpWithEmailPass,
    signInWithEmailPass,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
