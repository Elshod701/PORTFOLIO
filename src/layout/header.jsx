import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-900">
      <div className="container bg-slate-900">
        <div className="nav flex items-center justify-between py-6">
          <div className="logo font-bruno text-white text-xl">
            <Link to="/">Elshod Jo'rayev</Link>
          </div>

          <div className="nav_lists flex items-center gap-6 text-white ">
            <NavLink to="/about" className="flex">
              <span className="text-[#319584]">&lt;</span>
              <p className="font-raleway-600">ABOUT ME</p>
              <span className="text-[#319584]">&gt;</span>
            </NavLink>

            <NavLink to="/projects" className="flex">
              <span className="text-[#319584]">&lt;</span>
              <p className="font-raleway-600">PROJECTS</p>
              <span className="text-[#319584]">&gt;</span>
            </NavLink>

            <NavLink to="/contact" className="flex">
              <span className="text-[#319584]">&lt;</span>
              <p className="font-raleway-600">CONTACT</p>
              <span className="text-[#319584]">&gt;</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
