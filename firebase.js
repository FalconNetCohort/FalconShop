import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Existing firebaseConfig...


export { db, storage };

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export default db;
