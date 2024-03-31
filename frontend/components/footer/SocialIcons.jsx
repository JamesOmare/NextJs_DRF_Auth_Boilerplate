import React from "react";
import { Twitter, Linkedin, Facebook, Instagram,  } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
        <a
          href="https://twitter.com/"
          target="_blank"
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <Twitter/>
          
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <Linkedin />
          
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <Facebook />
          
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <Instagram />
          
        </a>
       
    </div>
  );
};

export default SocialIcons;