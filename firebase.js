// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'; // If you're using authentication
import 'firebase/firestore'; // If you're using Cloud Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdd3VmqdWllIeiz5paGOe4h7JBWWE0ui8",
    authDomain: "falconshop-303c4.firebaseapp.com",
    databaseURL: "https://falconshop-303c4-default-rtdb.firebaseio.com",
    projectId: "falconshop-303c4",
    storageBucket: "falconshop-303c4.appspot.com",
    messagingSenderId: "415270323891",
    appId: "1:415270323891:web:f44f363a7743ee1f2b92c6",
    measurementId: "G-K8CME54MV1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);