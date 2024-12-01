  "use client";
import logoImage from "../../../public/images/logo.png"; 
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-blue-300">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logoImage}
              alt="logo"
              width={50}
              height={60}
              className="w-[30]" 
            />
           <span className="ml-3 text-xl">Portfolio</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Portfolio Website All rights reserved {" "} 
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
            <Link
              target="blank"
              href="https://www.youtube.com/@skybypktv9862"
              className="text-gray-500"
            >
              <BsYoutube className="text-3xl hover:text-[#ff0000]" />
            </Link>

            <Link
              target="blank"
              href="https://www.facebook.com/saeed.khan.3979489/"
              className="text-gray-500"
            >
              <BsFacebook className="text-3xl hover:text-[#1877F2]" />
            </Link>

            <Link
              target="blank"
              href="https://twitter.com/SaeedKh04125755"
              className="text-gray-500"
            >
              <BsTwitterX className="text-3xl hover:text-[#d62976]" />
            </Link>

            <Link
              target="blank"
              href="https://www.linkedin.com/in/saeed-khan-b5272021a"
              className="text-gray-500"
            >
              <BsLinkedin className="text-3xl hover:text-[#0077B5]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

 