 "use client";

import saeedImage from "../../../public/images/saeed.png";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-red-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={430}
              height={430}
              src={saeedImage}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              I am a passionate student exploring the field of software
              development. What started as a curiosity about website creation has
              grown into a journey of mastering diverse tools and technologies to
              turn ideas into reality.
            </p>
            <p className="mb-5 leading-relaxed">
              My aspiration is to become a well-rounded software developer skilled
              in both front-end and back-end development. I am passionate about
              building innovative web and mobile applications, whether to streamline
              everyday tasks or spark creativity.
            </p>

            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
