import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1zMNZV1eDIu4JP_CrFdbkgsG48KpVXNQ",
  authDomain: "oshaberi-cf7b7.firebaseapp.com",
  projectId: "oshaberi-cf7b7",
  storageBucket: "oshaberi-cf7b7.appspot.com",
  messagingSenderId: "164788574636",
  appId: "1:164788574636:web:e50db4fc88825baea34209",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
