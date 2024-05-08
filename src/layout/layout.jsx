import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-[100vh]">
        <div>
          <Header />
          <main>
            <div>
              <Outlet />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
