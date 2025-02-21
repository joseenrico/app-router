// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjs7LG92muCHpGoNvo8g89X2Bb1jyR5Cg",
    authDomain: "my-next-app-b689d.firebaseapp.com",
    projectId: "my-next-app-b689d",
    storageBucket: "my-next-app-b689d.firebasestorage.app",
    messagingSenderId: "35806303959",
    appId: "1:35806303959:web:36a5ada48cc2bf5f0c4292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;