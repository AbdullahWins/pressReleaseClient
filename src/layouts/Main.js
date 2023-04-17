import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.css";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <div className=" flex items-center justify-center">
      <section
        className={`min-h-screen max-w-[1920px] flex flex-col justify-between bg-red-200 bg-no-repeat bg-top text-center`}
      >
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Main;
