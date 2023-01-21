import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>Über mich </SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Mein Name ist German. Ich absolviere momentan mein Studium/Diploma als
          Webdesigner-/entwickler beim SAE Institute München. In meiner Freizeit
          lese ich gerne, fotografiere und informiere mich noch tiefer in das
          Coding. Ich bin verheiratet und wir bekommen demnächst ein Kind. Seit
          meiner Kindheit versuchte ich immer der Berufswünsche meiner Eltern,
          so wie es die meisten machen, zu folgen. Dadurch habe ich viele
          verschiedene Bereiche ausprobiert, war aber nie richtig zufrieden, mit
          dem was ich mache und kam zu dem Entschluss, meinen eigenen Träumen zu
          folgen und startete somit das Studium.
        </p>
        <a
          href="mailto:gera.konradi@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-blue-500 dark:hover:text-blue-500 "
        >
          gera.konradi@gmail.com
        </a>
      </div>
      <img
        src={
         https://avatars.githubusercontent.com/u/71287015?s=400&u=4e7d591fbbaa20407721c70a96dcf84dfcf9783b&v=4
        }
        alt="German Konradi"
        className=" w-6/12 rounded-lg object-cover "
      />
    </div>
  );
}

export default About;
