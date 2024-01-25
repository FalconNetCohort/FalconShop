import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';


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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
