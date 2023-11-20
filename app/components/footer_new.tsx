import React from 'react';
import Image from 'next/image';
import Modal from './modal';

function Footer() {
    return (
        <div 
            className="w-full flex flex-row items-center"
            style={{ height: '150px', backgroundColor: '#EAB58B' }}
        >
            <div className="w-1/2 flex justify-center items-center">
                <h1 className="text-white home-main-text p-2 md:text-2xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] lg:text-7xl">
                    Questions?
                </h1>
            </div>       

            <div className="w-1/2 flex flex-col justify-center items-center">
                <p className="text-white text-xl mb-2">
                    Reach out to us
                </p>
                <div className="flex">
                    <img src="inst.jpg" alt="Instagram" className="w-1/2" />
                    <img src="email.jpg" alt="Email" className="w-1/2" />
                </div>
            </div>
        </div>
    );
}



  
  export default Footer;
  
  

  
  
