'use client';
import AOS from 'aos';
import Lenis from 'lenis';

    
import 'aos/dist/aos.css';
import { Fragment, ReactNode, useEffect } from 'react';
    
interface ProvidersProps {
    children: ReactNode;
  }
const AOSProvider: React.FC<ProvidersProps> = ({ children }) => {
   useEffect(() => {
     AOS.init();
   }, []);

   useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

   return <Fragment>{children}</Fragment>;
};

 export default AOSProvider;