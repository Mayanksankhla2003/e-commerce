import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVfyDHUrHIF-Iwy70t37DcOCuV-JKXlSI",
    authDomain: "e-commerce-96edc.firebaseapp.com",
    projectId: "e-commerce-96edc",
    storageBucket: "e-commerce-96edc.appspot.com",
    messagingSenderId: "355809449435",
    appId: "1:355809449435:web:7a60939a34a7c9020943fe",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
