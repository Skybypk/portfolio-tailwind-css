 "use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Correct Image Imports
import ImageFigma from "/public/images/figma.jpg";
import ImageResumeBuilder from "/public/images/resume-builder.jpg";
import ImageDynamic from "/public/images/dynamic.jpg";
import ImageEditable from "/public/images/editable.jpg";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-red-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Figma Project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={ImageFigma}
                  width={602}
                  height={360}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Figma UI/Web Template Design
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    My First Project
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    Figma UI is a clean and modern template website designed
                    for seamless user experiences, offering intuitive layouts
                    and stylish design elements.
                  </p>
                  <Link href="https://figma-template-two.vercel.app/">
                    <p className="leading-relaxed line-clamp-3 text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Resume Builder"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={ImageResumeBuilder}
                  width={602}
                  height={360}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    My 2nd Project
                  </h1>
                  <p className="leading-relaxed line-clamp-5">
                    Resume Builder is a tool designed to help users craft
                    professional and tailored resumes effortlessly.
                  </p>
                  <Link href="https://resume-builder-five-ashen.vercel.app/">
                    <p className="leading-relaxed line-clamp-3 text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Dynamic Resume Builder"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={ImageDynamic}
                  width={602}
                  height={360}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Dynamic Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    My 3rd Project
                  </h1>
                  <p className="leading-relaxed">
                    Dynamic Resume Builder empowers users to create
                    personalized, interactive, and visually appealing resumes
                    in minutes.
                  </p>
                  <Link href="https://dynamic-resume-vert.vercel.app/">
                    <p className="leading-relaxed line-clamp-3 text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Editable Resume"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={ImageEditable}
                  width={602}
                  height={360}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Editable Resume
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    My 4th Project
                  </h1>
                  <p className="leading-relaxed">
                    Editable Resume allows users to customize and update their
                    resumes effortlessly with user-friendly templates.
                  </p>
                  <Link href="https://editable-resume-rosy.vercel.app/">
                    <p className="leading-relaxed line-clamp-3 text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
