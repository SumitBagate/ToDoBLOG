import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Log to check if Firebase app is initialized
console.log("Firebase App Initialized:", app);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };











// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth,GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCdpHZiP7iy3mPG7kPcYNsWWylLk7aAvu0",
//   authDomain: "blog-71f27.firebaseapp.com",
//   projectId: "blog-71f27",
//   storageBucket: "blog-71f27.firebasestorage.app",
//   messagingSenderId: "168007459992",
//   appId: "1:168007459992:web:46225a7c8e8d1ed88f1ced"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();


// export {auth,provider}









// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAFh2-UF80GKml4rLYM9K_UutiFOyseGrc",
//   authDomain: "login-840fc.firebaseapp.com",
//   projectId: "login-840fc",
//   storageBucket: "login-840fc.appspot.com", // Corrected storage bucket
//   messagingSenderId: "401135650586",
//   appId: "1:401135650586:web:70cc16d499743061a8cea3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export default app;
