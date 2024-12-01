import logoImage from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-blue-200">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={logoImage}
              alt="logo"
              width={45}
              height={45}
              className="w-[40]"
            />
           <h2 className="text-3xl font-bold text-red-500 hover:text-red-100">Saeed</h2>
            <span className="ml-3 text-xl hover:text-red-100">Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-green-600">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-green-600">
              About
            </Link>
            <Link href={"#Skills"} className="mr-5 hover:text-green-600">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-green-600">
              Project
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-green-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
