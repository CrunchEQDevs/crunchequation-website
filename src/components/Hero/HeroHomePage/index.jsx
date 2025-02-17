import React from 'react';
import backgroundImage from '/assets/home/take.png';
import logoC from '/assets/home/logoc.png'
import ellipse from '/assets/Ellipse.png';


const HeroHomePage = () => {
  return (
    <>
      <header
        className="md:h-[700px] h-80 flex items-center justify-center bg-[#383838] relative "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className=" mx-auto relative z-10 text-center w-full h-full flex items-center justify-center">
          <div className='w-full flex items-center justify-center'>
            <h1 className="shadow-text text-4xl text-sh font-extrabold md:text-6xl xl:text-7xl text-white relative leading-tight">
              WE <span className="text-orange-500">CRUNCH</span> YOUR<br />
              WAY INTO SUCCESS
            </h1>
            <div className='absolute right-0 w-8/12 -z-20'>
              <img className='w-full' src={ellipse} alt="" />
            </div>
            <div className='w-5/12 relative '>
              <img className='xl:w-9/12 relative z-10 opacity-40' src={logoC} alt="" />
            </div>
          </div>
        </div>
      </header>


    </>
  );
};

export default HeroHomePage;