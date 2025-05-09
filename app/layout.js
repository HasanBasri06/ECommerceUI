import { Geist, Geist_Mono, Nunito, Open_Sans } from "next/font/google";
import Login from "./components/Login";
import Register from "./components/Register";
import "./globals.css";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: "--font-open-sans"
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito'
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  try {
    const response = await fetch('https://ecommerceapi-main-n6r2eh.laravel.cloud/api/users')

    console.log(response.body);
    
  } catch (error) {
    console.log(error);
    
  }
  

  
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased text-gray-700 bg-template h-full`}
      >
        <Providers>
          
          <Login />
          <Register />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
