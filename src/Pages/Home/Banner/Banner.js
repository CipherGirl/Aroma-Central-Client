import React from 'react';
import { useMantineColorScheme, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <div className="h-screen  md:h-full w-2/3 mx-auto flex flex-col items-center justify-evenly ">
      <div className="container w-full md:w-3/4 relative mr-0 md:mr-10 ml-0 md:ml-20  mb-[10rem]">
        <img
          className={`transition-all absolute left-0 right-0 mx-auto duration-300 ${
            dark ? 'opacity-100' : 'opacity-0 '
          }`}
          src="/images/bannerWhite.png"
        ></img>
        <img
          className={`transition-all absolute left-0 right-0 mx-auto duration-300 ${
            dark ? 'opacity-0 ' : 'opacity-100'
          }`}
          src="/images/bannerDark.png"
        ></img>
      </div>
      <div className="m-0 mt-0 h-80 pt-10  md:mt-[15rem] flex flex-col items-center">
        {' '}
        <h1 className="text-base md:text-2xl text-center font-serif mb-10">
          Are you a supplier of fragrance products? Come join us and become part
          of largest inventory of fine fragrance collection in Bangladesh
        </h1>
        <Button
          variant="default"
          px={80}
          size="md"
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Banner;
