import React from "react";
import Hero from "../../components/Hero/Hero";

const About = () => {
  // changing the webpage title dynamically
  document.title = `${process.env.REACT_APP_ApplicationName} | About`;
  
  return (
    <div>
      <Hero></Hero>
      <section className="flex items-center justify-center">
        <div className="max-w-5xl p-4 md:p-20 rounded-xl border-2 border-whiteMid m-4 md:my-20 w-full">
          <div className="text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-aboutTextStart to-aboutTextEnd text-2xl md:text-5xl font-bold pb-2">
              About us
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 py-10 px-4">
            <div className="bg-whiteHigh rounded-2xl p-6 min-h-80">
              <p className="text-xl text-aboutHeaderColor">Who</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-b  from-getStartedGradientStart to-getStartedGradientEnd text-3xl md:text-6xl font-bold">
                We Are
              </p>
              <p className="text-base md:text-xl text-aboutDetailsColor pt-12">
                {process.env.REACT_APP_ApplicationName}, a Chat GPT API-powered
                AI News Generator app developed by{" "}
                {process.env.REACT_APP_CompanyName}, provides natural language
                conversations with a virtual assistant for task assistance and
                helpful information. Its advanced language processing
                capabilities make it convenient for both personal and business
                use.
              </p>
            </div>
            <div className="bg-whiteHigh rounded-2xl p-6 min-h-80">
              <p className="text-xl text-aboutHeaderColor">What</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-getStartedGradientStart to-getStartedGradientEnd text-5xl md:text-6xl font-bold">
                We Do
              </p>
              <p className="text-base md:text-xl text-aboutDetailsColor pt-12">
                {process.env.REACT_APP_CompanyName}'s{" "}
                {process.env.REACT_APP_ApplicationName} is a News Generator app
                that uses Chat GPT API, helping users to accomplish their tasks
                and obtain helpful information via natural language
                conversations, thanks to its advanced language processing
                features. You're responsible for its development, deployment,
                and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
