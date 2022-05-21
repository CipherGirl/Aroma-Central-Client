import React from 'react';
import { Center } from '@mantine/core';

import { useLocation } from 'react-router-dom';

const NotFound = () => {
  let location = useLocation();
  return (
    <Center>
      <h1 className="mb-20 text-xl md:text-2xl text-center">
        404! No match for <code>{location.pathname}</code>
        <div className="flex items-center justify-center">
          <img width="70%" className="center" src="/images/404.png" alt="404" />
        </div>
      </h1>
    </Center>
  );
};

export default NotFound;
