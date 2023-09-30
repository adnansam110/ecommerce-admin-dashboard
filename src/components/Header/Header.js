import React from "react";

const Header = ({ title }) => {
  return (
    <h1 className="text-white bg-blue-400 text-[40px] p-4 pl-6 font-semibold">
      {title}
    </h1>
  );
};

export default Header;
