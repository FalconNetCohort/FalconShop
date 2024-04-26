import { getDatabase, ref, set } from "firebase/database";
import { ref as storageRef, uploadBytesResumable,  getDownloadURL } from 'firebase/storage';
import { CadetItem } from "@/services/constants";
import { storage } from '@/firebase';
import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const itemUpload = async (item: CadetItem, createdBy: string) => {
    try {
        const db = getDatabase();

        const { id: itemId, category } = item;

        await set(ref(db, `cadetItems/${category}/${createdBy}/${itemId}`), {item, createdBy});

        console.log("Document successfully added to Realtime DB.");
    } catch (e) {
        console.error("Error adding document to Realtime DB: ", e);
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
};

export const uploadCadetImage = (image: File): Promise<{downloadURL: string | null, error: string | null}> => {
    const storageReference = storageRef(storage, 'cadetImages/' + image.name);
    const uploadTask = uploadBytesResumable(storageReference, image);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.error(error);
                resolve({ downloadURL: null, error: error.message });
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                resolve({ downloadURL, error: null });
            }
        );
    });
};