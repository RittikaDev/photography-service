// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: process.env.REACT_APP_apiKey,
	// authDomain: process.env.REACT_APP_authDomain,
	// projectId: process.env.REACT_APP_projectId,
	// storageBucket: process.env.REACT_APP_storageBucket,
	// messagingSenderId: process.env.REACT_APP_messagingSenderId,
	// appId: process.env.REACT_APP_appId,
	apiKey: "AIzaSyA0iucHiK-iyu8usWtcjHIBjF4tyz-hlRM",
	authDomain: "photography-service-3b352.firebaseapp.com",
	projectId: "photography-service-3b352",
	storageBucket: "photography-service-3b352.appspot.com",
	messagingSenderId: "335483145801",
	appId: "1:335483145801:web:ea4a3a2df78e35f53df998",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
