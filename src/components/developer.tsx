import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Developer from "../data/developer";

// Define props type
type ProfileCardProps = {
  developer: Developer;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ developer }) => {
  return (
    <div className="flex flex-col items-center text-center ">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-300
                   w-full max-w-xs flex flex-col items-center text-center text-gray-900
                   hover:shadow-2xl transition-shadow duration-300"
      >
        <img
          src={developer.img}
          alt={developer.name}
          className="w-24 h-24 object-cover rounded-full border-4 border-red-500 shadow-md"
        />

        <h3 className="mt-4 text-lg text-white sm:text-xl font-bold tracking-wide">
          {developer.name}
        </h3>
        <p className="text-white text-sm sm:text-base">{developer.position}</p>

        <div className="mt-4 flex gap-4 sm:gap-6 text-lg sm:text-xl text-white">
          <a href={developer.insta} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href={developer.linkdin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href={`mailto:${developer.e_mail}`} className="hover:text-yellow-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const DeveloperList: React.FC = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {Developer.map((developer, index) => (
        <ProfileCard key={index} developer={developer} />
      ))}
    </div>
  );
};

export default DeveloperList;