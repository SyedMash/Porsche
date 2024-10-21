import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute left-2/4 -translate-x-2/4 z-50 p-3 w-full lg:w-[40vw] text-white flex items-center justify-between">
      MASH
      <a target="_blank"
        href="https://www.porsche.com/germany/models/911/911-gt3-models/911-gt3-touring/"
        className="cursor-pointer hover:border hover:rounded-full p-2 border-white/50"
      >
        Learn More
      </a>
    </nav>
  );
};

export default Navbar;
