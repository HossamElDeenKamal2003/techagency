// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBQJWs9zvvJkIKKQ7vKqZkamtFCY544vGo",
    authDomain: "resume-46d7f.firebaseapp.com",
    projectId: "resume-46d7f",
    storageBucket: "resume-46d7f.appspot.com",
    messagingSenderId: "372811036091",
    appId: "1:372811036091:web:885e93afbcf0702d6a409e",
    measurementId: "G-H38Y2TRKP3",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
// exporting the initialized Firebase app
firebase.initializeApp(firebaseConfig);
export default firebase;