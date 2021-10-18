import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofig";

const initializeApp = () => {
  initializeApp(firebaseConfig);
};

export default initializeApp;
