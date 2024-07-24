'use client';
import AOS from 'aos';
    
import 'aos/dist/aos.css';
import { Fragment, ReactNode, useEffect } from 'react';
    
interface ProvidersProps {
    children: ReactNode;
  }
const AOSProvider: React.FC<ProvidersProps> = ({ children }) => {
   useEffect(() => {
     AOS.init();
   }, []);

   return <Fragment>{children}</Fragment>;
};

 export default AOSProvider;