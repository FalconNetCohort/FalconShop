// import React, { useEffect, useState } from 'react';
// import { getAuth, User } from 'firebase/auth';
// import { getDatabase, ref, onValue } from 'firebase/database';
// import RootLayout from '../components/RootLayout';
// import AddCadetItem from '../components/AddCadetItem';
//
// interface Product {
//     id: string;
//     title: string;
//     description: string;
//     category: string;
//     price: string;
//     cadetName: string;
//     cadetContact: string;
//     imageUrl: string;
//     quantity: string;
//     createdBy: string;
// }
//
// export default function Profile() {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [user, setUser] = useState<User | null>(null);
//
//     useEffect(() => {
//         const auth = getAuth();
//         const curUser = auth.currentUser;
//
//         if (curUser) {
//             fetchProducts(curUser.uid);
//             setUser(curUser);
//         }
//     }, []);
//
//     function fetchProducts(uid: string) {
//         const db = getDatabase();
//         const productsRef = ref(db, /* 'yourProductsNode' */);
//
//         onValue(productsRef, (snapshot) => {
//             const data = snapshot.val();
//             const arrayData = Object.entries(data || {})
//                 .map(([key, value]) => ({
//                     id: key,
//                     ...(typeof value === 'object' && value !== null ? value : {}),
//                 }))
//                 .filter((item: Product) => item.createdBy === uid);
//             setProducts(arrayData);
//         });
//     }
//     return (
//         <RootLayout>
//             <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
//                 <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:center text-black">
//                     <section className="mb-8">
//                         <h2 className="text-2xl font-bold mb-4">User Information</h2>
//                         <div className="flex items-center">
//                             <div>
//                                 {user && <p><strong>Email:</strong> {user.email} </p>}
//                             </div>
//                         </div>
//                     </section>
//
//                     <section>
//                         <h2 className="text-2xl font-bold mb-4">Your Products</h2>
//                         {products.map((product) => (
//                             <div key={product.id}>
//                                 {/* put your product card here */}
//                                 <h3>{product.title}</h3>
//                                 {/* add other product details */}
//                             </div>
//                         ))}
//                     </section>
//
//                     <section>
//                         <h2 className="text-2xl font-bold mb-4">Upload a Product</h2>
//                         <AddCadetItem />
//                     </section>
//                 </div>
//             </main>
//         </RootLayout>
//     );
// }