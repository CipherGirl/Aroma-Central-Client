import React from 'react';

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col md:flex-row justify-evenly gap-5">
        <div className="w-full md:w-5/12 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4">
            About Us
          </h1>
          <p className="font-normal text-justify leading-6 ">
            We alogn with other frangrance enthusiast established Aroma Central
            in 2022. It has the largest collection of fine fragrance products in
            Bangladesh. All the products are imported from our trusted supplier.
            You can become a supplier and use Aroma Central to deliver and stock
            perfumes.
          </p>
        </div>
        <div className="h-30 md:h-[600px] w-auto">
          <img
            className="w-full h-full"
            src="/images/perfumes.jpeg"
            alt="A group of People"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
