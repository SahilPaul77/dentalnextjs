 'use client'
 import { useEffect } from 'react';

 const ExpertAnimation = ()=>{
useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
 }
 export default ExpertAnimation
 