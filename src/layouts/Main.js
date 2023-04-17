import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.css";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-start md:justify-between bg-heroBg bg-no-repeat bg-top text-center`}
    >
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
