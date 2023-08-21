import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ContextProvider } from "@/context/SocketContext";
import { NextPage } from "next";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { Provider } from "react-redux";
 import { store } from "@/redux/store";

 const inter = Inter({
   weight: ["500"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter",
 });
 interface Props {
   Component: any;
   pageProps: AppProps;
 }
 const queryClient = new QueryClient();

 const App: NextPage<Props> = ({ Component, pageProps }) => {
   const router = useRouter();

   return (
     <Provider store={store}>
       <Toaster />
       {router.pathname === "/join-space/[spaceId]" ? (
         <div className={`${inter.className} `}>
           <QueryClientProvider client={queryClient}>
             <ContextProvider>
               <Component {...pageProps} />
             </ContextProvider>
           </QueryClientProvider>
         </div>
       ) : (
         <Layout>
           <Component {...pageProps} />
         </Layout>
       )}
     </Provider>
   );
 };
export default App;
