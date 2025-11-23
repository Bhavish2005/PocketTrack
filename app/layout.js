import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Footer from "@/components/footer";


const inter =Inter({
  subsets: ["latin"]});
export const metadata = {
  title: "PocketTrack",
  description: "Finance platform",
};

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>

   
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen `}
      >
      <div className="fixed inset-0 -z-10 pointer-events-none">
            <div className="w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl absolute -top-32 -left-32"></div>
            <div className="w-72 h-72 bg-cyan-300 opacity-20 rounded-full blur-2xl absolute bottom-0 right-0"></div>
          </div>
      <Header/>
      <main className="min-h-screen">{children}</main>
        <Toaster/>
        <Footer/>



      </body>
    </html>
     </ClerkProvider>
  );
}
