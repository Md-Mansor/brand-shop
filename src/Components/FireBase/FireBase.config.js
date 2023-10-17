// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyvp3moDv6cHrjsyIsLiXJyMF-WvUycIU",
    authDomain: "automotive-web-client.firebaseapp.com",
    projectId: "automotive-web-client",
    storageBucket: "automotive-web-client.appspot.com",
    messagingSenderId: "99270084772",
    appId: "1:99270084772:web:d02e803825b427e354fe31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;