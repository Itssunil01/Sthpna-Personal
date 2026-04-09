import React from 'react';
import { Guest } from '../types';
import Guests from '../data/guest';

type GuestProps = {
  event: Guest;
};

const GuestCard = ({ event }: GuestProps) => {
  return (
    <div className="bg-white/0 shadow-lg flex flex-col items-center text-center w-72 sm:w-80 transition-transform duration-300 hover:scale-105">
      
      <img
        src={event.img}
        alt={event.name}
        className="object-contain w-full h-auto"
      />

      <div className="px-4 py-3">
        <h3 className="text-white text-xl sm:text-2xl">
          {event.name}
        </h3>
      </div>

    </div>
  );
};

const GuestList = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10 text-white">
        Guest & Speaker Event
      </h2>
      
      <div className="flex justify-center items-center">
        {Guests.map((guest, index) => (
          <GuestCard key={index} event={guest} />
        ))}
      </div>

    </div>
  );
};

export default GuestList;