import React from "react";
import CoordinatorsList from "../components/coordinators";

const Secretaries = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg min-h-screen text-white flex flex-col items-center">

      {/* 🔹 Secretaries Section */}
      <section className="w-full flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Secretaries
        </h1>

        {/* 🔹 Secretaries List */}
        <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-6">
          <CoordinatorsList />
        </div>
      </section>

    </div>
  );
};

export default Secretaries;