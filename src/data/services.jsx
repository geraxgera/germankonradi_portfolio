import React from "react";
import { MdWeb } from "react-icons/md";
import {FaHandHoldingHeart} from 'react-icons/fa';
import {VscCode} from 'react-icons/vsc';

export default [
  {
    title: "Web Design",
    icon: <MdWeb className="w-full h-full"></MdWeb>,
    description: "AdobeXD | Figma | Photoshop",
  },
  {
    title: "Development",
    icon: <VscCode className="w-full h-full"></VscCode>,
    description: "HTML | CSS | JavaScript",
  },
  {
    title: "Weitere Tools",
    icon: <FaHandHoldingHeart className="w-full h-full"></FaHandHoldingHeart>,
    description: "ReactJS | Tailwind | NodeJS",
  },
];
