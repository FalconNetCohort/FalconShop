import React, { useState, useEffect } from 'react';
import db from '../firebase';  // Make sure to have set up firebase.js or wherever you're exporting your db instance from.

export default function ClientComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const unsubscribe = db.ref('cadetItems').on('value', snapshot => {
            const fetchedItems = [];
            snapshot.forEach(childSnapshot => {
                fetchedItems.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            setItems(fetchedItems);
        });

        // Cleanup
        return () => unsubscribe();
    }, []);

    return (
        <section className="mb-32 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
            {items.map((item, index) => (
                <div key={item.id} className="rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-100 dark:border-neutral-700 dark:bg-neutral-800/30 p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                    <h2 className="mb-3 text-xl font-semibold text-blue-600">{item.title}</h2>
                    <p className="text-sm opacity-70 mb-3">
                        {item.description}
                    </p>
                    <span className="block mt-2 font-bold text-blue-700">${item.price}</span>
                </div>
            ))}
        </section>
    );
}
