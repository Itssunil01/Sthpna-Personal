import React, { useState, useEffect } from "react";
import { Events } from "../types";
import Event from "../data/event";

type EventProps = {
  event: Events;
};

const EventsCard = ({ event }: EventProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className="bg-white bg-opacity-0 shadow-lg overflow-hidden flex flex-col items-center text-center w-full sm:w-72 md:w-80 lg:w-96 gap-4">
      
      <div className="w-full flex items-center justify-center bg-black/20 rounded-xl p-3">
        <img
          src={event.img}
          alt={event.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="px-4 pb-4 flex flex-col items-center gap-3">
        <h3 className="text-white text-xl sm:text-2xl">
          {event.name}
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={event.btn}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-black transition"
          >
            Register
          </a>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-black transition"
            onClick={() => setIsModalOpen(true)}
          >
            Rules
          </button>
        </div>
      </div>

      {/* ✅ MODAL WITH ANIMATION */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[999] p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white/90 backdrop-blur-lg p-6 rounded-xl w-full max-w-md text-center shadow-2xl transform transition-all duration-300 scale-95 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Event Rules</h2>

            <ul className="text-gray-700 text-left list-disc pl-5">
              {event.rules.map((rule, i) => (
                <li key={i} className="mb-2">
                  {rule}
                </li>
              ))}
            </ul>

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-black transition"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const EventList = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10">
        Our Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
        {Event.map((event, index) => (
          <div key={index} className="flex justify-center">
            <EventsCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;