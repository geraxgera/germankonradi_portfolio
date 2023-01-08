import React from "react";

function HeroSection() {
  return (
    <div id='hero' className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-blue-700 font-semibold">
          Hi, ich bin German Konradi
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300 ">
          Ich habe meine Diploma als Web-Designer & Web-Entwickler in SAE
          Institute Münche absolviert
        </p>
        <a
          href="#works"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
