import { ref, set, push } from 'firebase/database';
import db from './firebase';

export function addCadetItem(item) {
    const cadetItemsRef = ref(db, 'cadetItems');
    const newItemRef = push(cadetItemsRef); // Use push directly here
    set(newItemRef, item).then(() => {
        console.log("Item added successfully!");
    }).catch(error => {
        console.error("Error adding item:", error);
    });
}
