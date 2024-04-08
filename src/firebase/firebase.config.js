// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVGFtNYv55R-8BMHlJjC3HibdWhlax8FA",
  authDomain: "news-channel-auth.firebaseapp.com",
  projectId: "news-channel-auth",
  storageBucket: "news-channel-auth.appspot.com",
  messagingSenderId: "90648337614",
  appId: "1:90648337614:web:c019cf3967ce4b9a62049f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;