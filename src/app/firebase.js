import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA3Kxl2nwGOcIbenAdBmcQ3ZBRLXZlpgQc",
    authDomain: "red-onion-202ad.firebaseapp.com",
    projectId: "red-onion-202ad",
    storageBucket: "red-onion-202ad.appspot.com",
    messagingSenderId: "575698433945",
    appId: "1:575698433945:web:94e8ad3b4457120d424508"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export{auth, googleProvider, githubProvider};