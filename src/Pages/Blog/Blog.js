import { Center } from '@mantine/core';
import React from 'react';

const Blog = () => {
  return (
    <div className="w-3/4  m-auto">
      <div className="shadow-lg my-3 py-5 px-10">
        <h1 className="text-xl font-bold mb-3">
          Difference Between Javascript and NodeJS
        </h1>
        <p className="text-justify">
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses , it requires libraries that can easily be accessed from
          JavaScript programming for better use.
        </p>
      </div>
      <div className="shadow-lg my-3 py-5 px-10">
        <h1 className="text-xl font-bold mb-3">
          When should you use nodejs and when should you use mongodb?
        </h1>
        <p className="text-justify">
          Nodejs is a Javascript engine that we can write any application we
          want with. Most commonly, it is used to build servers that can respond
          to web requests, though it can be used for lots of other types of code
          too. MongoDB is a database engine. Code within some application or
          server uses MongoDB to save, query or update data in a database.
          <br />
          If we want to write some kind of stand-alone program or server in
          Javascript, then we can use nodejs for it. If the application needs
          the ability to persistently store data in a way that we can
          efficiently query or update it later, then we can use MongoDB as
          database.
        </p>
      </div>
      <div className="shadow-lg my-3 py-5 px-10">
        <h1 className="text-xl font-bold my-3">
          What is the purpose of jwt and how does it work?
        </h1>
        <p className="text-justify">
          JWTs are used as a secure way to authenticate users and share
          information. JWT, or JSON Web Token, is an open standard used to share
          security information between two parties — a client and a server. Each
          JWT contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
          <br />
          Whenever the user wants to access a protected route or resource, the
          user agent should send the JWT, typically in the Authorization header
          using the Bearer schema. The server's protected routes will check for
          a valid JWT in the Authorization header, and if it's present, the user
          will be allowed to access protected resources.
        </p>
      </div>
    </div>
  );
};

export default Blog;
