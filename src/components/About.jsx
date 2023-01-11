import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>Über mich </SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Qui duis reprehenderit sint est magna aliqua ut ex ipsum sunt nulla.
          Culpa cupidatat est dolore ad qui aute tempor anim voluptate eiusmod.
          Duis incididunt esse sunt cillum excepteur mollit irure quis proident
          consequat aliqua minim. Tempor reprehenderit labore laboris
          exercitation nisi et veniam elit ipsum eiusmod do. Excepteur consequat
          dolore tempor pariatur nisi id qui dolore dolore aliqua ad voluptate
          occaecat dolor.
        </p>
        <a
          href="mailto:gera.konradi@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-blue-500 dark:hover:text-blue-500 "
        >
          gera.konradi@gmail.com
        </a>
      </div>
      <img
        src={"https://user-images.githubusercontent.com/71287015/211812016-c7456e75-8efc-4002-9ff6-ace642611e6c.jpeg"}
        alt="German Konradi"
        className=" w-6/12 rounded-lg object-cover "
      />
    </div>
  );
}

export default About;
