import { useState, useEffect } from 'react';
import Image from 'next/image';
import { db } from '@/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export interface CadetItem {
    createdBy: any;
    timeCreated: any;
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    cadetName: string;
    cadetContact: string;
    imageUrl: string;
}

interface FilterProps {
    selectedCategories: string[];
    searchValue: string;
}



    return (
        // Bundle HTML w/ new implementation
        // currentUserId ?
        //     <section className="flex flex-col items-center justify-center">
        //         <div className="mb-32 grid mx-auto gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        //             <div className="card">
        //                 <h2 className="card-title-font mb-3 text-xl w-full overflow-wrap-anywhere break-words">Example</h2>
        //                 <span
        //                     className="block mt-2 font-bold text-blue-700 overflow-wrap-anywhere break-words">Example</span>
        //                 <p className="card-body-font mt-3 text-gray-600 overflow-wrap-anywhere break-words">Cadet: Example</p>
        //                 <p className="card-body-font mt-1 text-gray-600 overflow-wrap-anywhere break-words">Contact: Example</p>
        //                 <p className="card-desc-font opacity-70 mb-3 overflow-wrap-anywhere break-words">Example</p>
        //
        //                 <Image
        //                     src={"/assets/images/spark.png"}
        //                     alt=""
        //                     width={150}
        //                     height={150}
        //                     loader={({src}) => src}
        //                 />
        //             </div>
        //
        //             {items.map((item) => (
        //                 <div key={item.id} className="card">
        //                     {currentUserId === item.createdBy && (
        //                         <p className="block mt-2 font-bold text-red-700 mb-0">Your Listing</p>
        //                     )}
        //                     <h2 className="card-title-font mb-3 text-xl w-full overflow-wrap-anywhere break-words">{item.title}</h2>
        //                     <span className="block mt-2 font-bold text-blue-700 overflow-wrap-anywhere break-words">${item.price}</span>
        //                     <p className="card-body-font mt-3 text-gray-600 overflow-wrap-anywhere break-words">Cadet: {item.cadetName}</p>
        //                     <p className="card-body-font mt-1 text-gray-600 overflow-wrap-anywhere break-words">Contact: {item.cadetContact}</p>
        //                     <p className="card-desc-font opacity-70 mb-3 overflow-wrap-anywhere break-words">{item.description}</p>
        //                     <Image
        //                         src={item.imageUrl}
        //                         alt=""
        //                         width={150}
        //                         height={150}
        //                         loader={({src}) => src}
        //                     />
        //                 </div>
        //             ))}
        //         </div>
        //     </section>
        //     :
        //     <div className="flex justify-center h-screen">
        //         <p className="text-center text-2xl text-blue-500">Please login with AFACADEMY email to view listings</p>
        //     </div>