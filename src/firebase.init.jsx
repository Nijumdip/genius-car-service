import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQh5HG7J4nB1_-_n9XGhqrYODJ0d4OVdo",
  authDomain: "genius-car-service-d7522.firebaseapp.com",
  projectId: "genius-car-service-d7522",
  storageBucket: "genius-car-service-d7522.appspot.com",
  messagingSenderId: "618057569050",
  appId: "1:618057569050:web:3bef01dfa8c590b03152a3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;