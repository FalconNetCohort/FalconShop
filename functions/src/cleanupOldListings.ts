import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const cleanupOldListings = functions.pubsub.schedule('every 24 hours').onRun(async () => {
    const db = admin.database();
    const now = Date.now();
    const fourMonthsInMilliseconds = 4 * 30 * 24 * 60 * 60 * 1000; // approx. 4 months in milliseconds

    try {
        // Get all cadetItems from the database
        const cadetItemsSnapshot = await db.ref('/cadetItems').once('value');

        const cadetItems = cadetItemsSnapshot.val();
        if (cadetItems) {
            for (const category in cadetItems) {
                for (const userId in cadetItems[category]) {
                    for (const itemId in cadetItems[category][userId]) {
                        const item = cadetItems[category][userId][itemId];
                        const timeCreated = item.timeCreated;

                        if (timeCreated && now - timeCreated > fourMonthsInMilliseconds) {
                            // Remove item older than 4 months
                            await db.ref(`/cadetItems/${category}/${userId}/${itemId}`).remove();
                            console.log(`Removed item ${itemId} from category ${category} created by ${userId}`);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error("Error cleaning up old listings:", error);
    }
});
