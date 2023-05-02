// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcAP-6VqYAV2YU6zpbBLLskLR8ZF3vTEQ",
  authDomain: "the-news-dragon-cbfb0.firebaseapp.com",
  projectId: "the-news-dragon-cbfb0",
  storageBucket: "the-news-dragon-cbfb0.appspot.com",
  messagingSenderId: "978730979865",
  appId: "1:978730979865:web:678aff72de33d942101088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;