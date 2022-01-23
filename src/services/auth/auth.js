import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = (email, pass) =>
  signInWithEmailAndPassword(getAuth(), email, pass);

export const registerRequest = (email, pass) =>
  createUserWithEmailAndPassword(getAuth(), email, pass);

export const logoutRequest = () => signOut(getAuth());
