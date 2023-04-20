import React, { useContext } from "react";
import success from "../../assets/icons/success.png";
import { AiContext } from "../../contexts/AiContext";
import Hero from "../../components/Hero/Hero";

const Success = () => {
  const { email } = useContext(AiContext);
  return (
    <div>
      <Hero></Hero>
      <section className="flex items-center justify-center md:mt-[-212px] pb-40">
        <div className="flex items-center justify-center border-2 border-titleGradientEnd w-10/12 bg-whiteHigh rounded-3xl shadow-lg shadow-blackLow p-4">
          <div className="max-w-6xl flex flex-col items-center justify-center w-full py-32">
            <img className="pb-12 w-60" src={success} alt="" />
            <p className="text-successTextColor text-5xl font-black pb-8">
              Success!
            </p>
            <p className="text-2xl pb-5 font-semibold">
              Thank you for using YOURDOMAIN! Your press release will be emailed at
              <span className="font-black"> {email} </span> within a few
              minutes, sooner depending on server load. Remember, while AI is a
              valuable tool in news writing, it requires human supervision so we
              always encourage human editing prior to finalizing a press
              release.
            </p>
            <p className="text-successPgColor text-2xl">
              When you are ready to distribute your press release, consider
              using our press release distribution and news marketing platform,
              YOURDOMAIN. We'll include a discount code in your email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
