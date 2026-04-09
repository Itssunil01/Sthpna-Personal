"use client";
import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    day: "Day 1",
    date: "April 10, 2026",
    schedule: [
      { time: "8:30 AM", event: "Poster Dropdown" },
      { time: "9:00 AM - 10:30 AM", event: "Inaguration Ceremony" },
      { time: "10:45 AM - 11:45 AM", event: "Civil Talk-I (AVC Hall)" },
      { time: "11:45 AM - 1:00 PM", event: "Build-a-thon(C-320)" },
      { time: "3:00 PM - 3:30 PM", event: "Civil Talk-II (AVC Hall)" },
      { time: "3:30 PM - 6:30 PM", event: "Puzzle Quest(Infront Of Civil Dept)" },
    ],
  },
  {
    day: "Day 2",
    date: "April 11, 2026",
    schedule: [
      { time: "8:30AM - 9:30AM", event: " Cad Clash (C-320) " },
      { time: "9:30 AM - 11:00 PM", event: " Doodle Dynamics(C-320)" },
      { time: "11:30 AM - 1:00 PM ", event: "Civil Got Latent (AVC HALL) " },
      { time: "3:00PM - 4:30 PM", event: "Felicitation(AVC HALL)" },
      { time: "4:45PM - 6:00 PM", event: "Cultural Evening (AVC Hall)" },
    ],
  },
];

const TimelineCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="shadow-lg border-2 border-red-500 rounded-2xl p-6 w-full max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        📅 2-Day Event Timeline
      </h2>

      {/* Scrollable Container - Completely Hidden Scrollbar */}
      <div className="max-h-[660px] overflow-y-auto pr-3 custom-scrollbar-hidden">
        {events.map((dayEvent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {dayEvent.day} - {dayEvent.date}
            </h3>
            <ul className="mt-2 space-y-2">
              {dayEvent.schedule.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {item.time}
                  </span>
                  <span className="flex-1 font-semibold text-gray-900">
                    {item.event}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineCard;
