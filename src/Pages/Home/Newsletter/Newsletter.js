import { Button } from '@mantine/core';
import React from 'react';

const Newsletter = () => {
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16 mt-10">
      <div className="w-full relative flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-9  text-center">
          Don’t miss out!
        </h1>
        <p className="text-base leading-normal text-center  mt-6">
          Subscribe to your newsletter to get updates of our inventory. Our
          newsletter is sent once in <br />a week on every friday so subscribe
          to get latest news and updates.
        </p>
        <div className="sm:border flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
          <input
            className="border  text-base w-full font-medium leading-none  p-4 focus:outline-none bg-transparent "
            placeholder="Email Address"
          />
          <Button variant="default"> Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
