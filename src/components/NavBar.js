import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center py-8 bg-indigo-600">
      <ul className="flex gap-10 text-xl">
        <Link to={"/"}>Crud</Link>
        <Link to={"/shopping"}>Shoping Cart</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
