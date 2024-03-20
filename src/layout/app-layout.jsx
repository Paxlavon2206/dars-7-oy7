import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
