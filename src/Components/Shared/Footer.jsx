import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-10 mt-10">
 
      <div className="max-w-5xl mx-auto text-center px-4">

       
        <h1 className="text-3xl font-bold mb-3">
          KeenKeeper
        </h1>

      
        <p className="text-sm text-gray-200 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

       
        <div className="mt-6">
          <p className="text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-3">

            <a className="bg-white text-[#244D3F] p-2 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>

            <a className="bg-white text-[#244D3F] p-2 rounded-full hover:scale-110 transition">
              <FaTwitter />
            </a>

            <a className="bg-white text-[#244D3F] p-2 rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

     
      <div className="border-t border-white/20 mt-8 pt-4">

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 px-4">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Cookies</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;