// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCauRkbPc-QkXy3r_35EZwE_dCQKMfhcdg",
    authDomain: "web-noticias-react.firebaseapp.com",
    projectId: "web-noticias-react",
    storageBucket: "web-noticias-react.appspot.com",
    messagingSenderId: "329777625259",
    appId: "1:329777625259:web:c52352c21190671e91dfee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }