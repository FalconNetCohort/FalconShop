import '@/assets/styles/css/globals.css';
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/assets/images/FalconShop_Icon.ico" />
            </Head>
            <Navbar/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
