import "../styles/globals.css";
import "../styles/App.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { AuthContextProvider } from "../context/AuthContext";
import { Toaster } from 'react-hot-toast';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
      <Toaster />
      <AuthContextProvider>
        <Component {...pageProps} />;
      </AuthContextProvider>
  </>
};

export default MyApp;
