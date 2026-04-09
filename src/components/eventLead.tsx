import React from "react";
import { motion } from "framer-motion";
import eventLeadData from "../data/eventLead";
const EventLeadCard = ({ member }: any) => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-300 
                   w-full max-w-xs flex flex-col items-center text-center text-gray-900
                   hover:shadow-2xl transition-shadow duration-300"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />

        <h3 className="mt-4 text-white text-lg font-bold">
          {member.name}
        </h3>
      </motion.div>
    </div>
  );
};

const EventLeadList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {eventLeadData.map((lead, index) => (
        <EventLeadCard key={index} member={lead} />
      ))}
    </div>
  );
};

export default EventLeadList;