import { getDatabase, ref, push, set } from "firebase/database";
import { app } from './firebase';

export async function addCadetItem(item) {
    try {
        const db = getDatabase(app); // Get a reference to the Realtime Database
        const categoryRef = ref(db, `cadetItems/${item.category}/${item.createdBy}`); // Reference to the category node under "cadetItems"

        // Push the new item to the database under the category node
        const newItemRef = push(categoryRef);
        // Set the data of the new item using the item object
        // Create a new item object that includes the Firebase-generated key as its id.
        const newItemWithKey = {
            ...item,
            id: newItemRef.key
        };

        await set(newItemRef, newItemWithKey); // Save the new item data with the id included.

        console.log("Item added successfully with ID:", newItemRef.key);
        return newItemRef.key;
    } catch (error) {
        console.error("Error adding item:", error);
        throw error; // Rethrow the error to handle it in the calling code if needed
    }
}