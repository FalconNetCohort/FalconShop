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

import { collection, addDoc, doc } from "firebase/firestore";
import { db } from './firebase';

export async function addCadetItem(item, category) {
    try {
        // Correctly define the path to the category subcollection within "cadetItems"
        const categoryCollectionRef = collection(db, `cadetItems/${category}`);
        // Add the item directly to the category subcollection
        const docRef = await addDoc(categoryCollectionRef, item);
        console.log("Item added successfully with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding item:", error);
    }
}
