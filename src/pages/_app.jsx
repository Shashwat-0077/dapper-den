import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
