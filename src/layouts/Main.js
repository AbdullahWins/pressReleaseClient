import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.css";
import Footer from "../components/shared/Footer/Footer";
// import Hero from "../components/Hero/Hero";
import GetStarted from "../components/GetStarted/GetStarted";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <section
        className={`min-h-screen w-full flex flex-col justify-between bg-red-200 bg-no-repeat bg-top text-center`}
      >
        <Outlet></Outlet>
        <GetStarted></GetStarted>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Main;
