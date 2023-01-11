import React from "react";

function HeroSection() {
  return (
    <div id='hero' className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-sky-600 font-semibold">
          Hallo, ich bin German Konradi
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300 ">
          Ich bin Webdesigner/Webentwickler
        </p>
        
        <a
          href="#works"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:text-md"
        >
          Zu meinen Arbeiten
        </a>
      </div>
    </div>
  );
}

export default HeroSection;

