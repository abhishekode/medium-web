import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';

// Import Layout Component
import Header from '@/components/Layout/header'
import Footer from '@/components/Layout/footer'

// Import theme provider
import Providers from "./providers";

// Import Contexts
import { UserContextProvider } from "@/context/UserContext";
import { BasicInfoProvider } from "@/context/basicInfoContext";
import { CategoryProvider } from "@/context/categoryContext";

const inter = Inter({ subsets: ["latin"] });

interface AdminLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <UserContextProvider>
            <BasicInfoProvider>
              <CategoryProvider>
                <Header />
                <div className="min-h-screen">{children}</div>
                <Footer />
              </CategoryProvider>
            </BasicInfoProvider>
          </UserContextProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
