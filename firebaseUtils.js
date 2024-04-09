//import { collection, addDoc } from "firebase/firestore";
// import {db} from './firebase';
//
// export async function addCadetItem(item) {
//     try {
//         const docRef = await addDoc(collection(db, "cadetItems"), item);
//         console.log("Item added successfully with ID:", docRef.id);
//     }
//     catch (error) {
//         console.error("Error adding item:", error);
//     }
// }
//
//

import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

export async function addCadetItem(item, category) {
    try {
        // Access the Firestore collection based on the provided category
        const docRef = await addDoc(collection(db, category), item);
        console.log("Item added successfully with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding item:", error);
    }
}

