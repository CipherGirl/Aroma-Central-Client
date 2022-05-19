import React, { useState, useRef, useEffect } from 'react';
import { ActionIcon, Container, useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  const useOutsideClicker = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideClicker(wrapperRef);

  return (
    <div ref={wrapperRef} className="container-lg">
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {dark ? (
              <Link
                to="/"
                className="flex  items-center justify-between text-sm hover:font-semibold px-3 py-3"
              >
                <img
                  className="h-16 w-16"
                  src="/images/logoWhite.png"
                  alt="Workflow"
                />{' '}
                <h1 className="font-serif pl-5 text-lg font-bold hidden md:block">
                  Aroma Central
                </h1>
              </Link>
            ) : (
              <Link
                to="/"
                className="flex items-center justify-between text-sm hover:font-semibold px-3 py-3"
              >
                <img
                  className="h-16 w-16"
                  src="/images/logoDark.png"
                  alt="Workflow"
                />{' '}
                <h1 className="font-serif pl-5 text-lg font-bold hidden md:block">
                  Aroma Central
                </h1>
              </Link>
            )}
            <Link to="/" className="md:hidden font-serif text-2xl font-bold">
              Aroma Central
            </Link>
            <div className="hidden md:block">
              <div className="mr-5 flex items-baseline space-x-4">
                <Link
                  to="/blog"
                  className=" text-sm hover:font-semibold px-3 py-3"
                >
                  Blog
                </Link>

                <Link
                  to="/about"
                  className="text-sm hover:font-semibold px-3 py-3"
                >
                  About
                </Link>

                <Link
                  to="/manage"
                  className="text-sm hover:font-semibold px-3 py-3"
                >
                  Manage Inventory
                </Link>
              </div>
            </div>

            <div className="hidden md:block  ">
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:font-semibold px-3 py-3">
                  Login/Signup
                </Link>
                <ActionIcon
                  variant=""
                  color={dark ? '' : 'dark'}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-sun"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <desc>https://tabler-icons.io/i/sun</desc>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-moon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <desc>https://tabler-icons.io/i/moon</desc>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                    </svg>
                  )}
                </ActionIcon>
              </div>
            </div>

            <div className="mr-4 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} />
      </nav>
    </div>
  );
};

const MobileMenu = ({ isOpen }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <div
      id="mobile-menu"
      className={`${dark ? 'bg-[#1a1b1e]' : 'bg-white'}
        ${
          isOpen
            ? 'container absolute z-[100] md:hidden animate-fadeIn px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-center'
            : 'hidden'
        }
      `}
    >
      <ActionIcon
        variant=""
        color={dark ? '' : 'dark'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-sun"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-moon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </svg>
        )}
      </ActionIcon>

      <Link to="/blog" className=" text-sm hover:font-semibold px-3 py-3">
        Blog
      </Link>

      <Link to="/about" className="text-sm hover:font-semibold px-3 py-3">
        About
      </Link>

      <Link to="/manage" className=" text-sm hover:font-semibold px-3 py-3">
        Manage Inventory
      </Link>
      <Link to="/login" className="hover:font-semibold px-3 py-3">
        Login/Signup
      </Link>
    </div>
  );
};

export default Navbar;
