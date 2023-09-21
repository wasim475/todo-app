// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp4ghYje5Yqz7QnLTwVU0JFhxBsB-UkkQ",
  authDomain: "todo-e7e53.firebaseapp.com",
  databaseURL: "https://todo-e7e53-default-rtdb.firebaseio.com",
  projectId: "todo-e7e53",
  storageBucket: "todo-e7e53.appspot.com",
  messagingSenderId: "749745926573",
  appId: "1:749745926573:web:800a0b13cb37ae4aa2b124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig