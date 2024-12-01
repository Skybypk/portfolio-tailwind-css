 "use client";
import saeedImage from "../../../public/images/saeed.png";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-red-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Frontend Web Developer ",
                  "Beginner of Next.Js",
                  "Artificial Intelligence",
                  "Web 3.0 & Metaverse",
                  "Blockchain",
                  "Agentic AI",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w- [100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
            My name is Saeed Khan, a passionate beginner in web development. I
            am dedicated to honing my skills and committed to creating dynamic
            and user-friendly websites. With a strong work ethic and a hunger
            for learning, I am driven to grow and succeed in the world of
            technology.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[25rem]"
           src={saeedImage}
           alt="hero"
           width={500}
          height={500}
           />

        </div>
      </div>
    </section>
  );
};

export default Hero;
