// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQKjSm2KFGb6SiIdUNTKGGSBTWWAJTrMc",
  authDomain: "mern-book-69add.firebaseapp.com",
  projectId: "mern-book-69add",
  storageBucket: "mern-book-69add.appspot.com",
  messagingSenderId: "905830089142",
  appId: "1:905830089142:web:dffd1b1321fa901eca0117",
  measurementId: "G-DY0TC9H2J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;