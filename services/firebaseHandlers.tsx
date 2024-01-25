import { addDoc, collection } from 'firebase/firestore';
import { ref as storageRef, uploadBytesResumable,  getDownloadURL } from 'firebase/storage';
import { Item } from "@/services/constants";
import { db, storage } from '@/firebase'; // This 'db' is Firestore instance

export const itemUpload = async (item: Item) => {
    try {
        await addDoc(collection(db, "cadetItems"), item);
        console.log("Document successfully added to Firestore.");
    } catch (e) {
        console.error("Error adding document: ", e);
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