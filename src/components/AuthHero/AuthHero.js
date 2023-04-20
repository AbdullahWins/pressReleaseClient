import React, { useContext, useState } from "react";
import TopNav from "../shared/TopNav/TopNav";
import { StorageContext } from "../../contexts/StorageContext";
import { useNavigate } from "react-router-dom";
import { AiContext } from "../../contexts/AiContext";

const AuthHero = () => {
  const { email } = useContext(AiContext);
  const { getDocumentFromFirestore } = useContext(StorageContext);
  const [authCode, setAuthCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setAuthCode(value);
  };

  const handleSubmit = () => {
    getDocumentFromFirestore(authCode);
    setTimeout(() => {
      navigate("/final");
    }, 1000);
  };
  return (
    <section className="flex flex-col items-center justify-start bg-authHeroBg bg-no-repeat bg-top text-center md:h-[1000px] md:pt-10">
      <TopNav></TopNav>
      <div className="flex flex-col items-center justify-center py-8 px-4 md:px-0 md:py-0 md:pt-[189px] text-whiteHigh">
        <div className="max-w-6xl">
          <div className="pb-16">
            <p className="text-whiteHigh text-6xl font-bold pb-3">
              Authentication Required
            </p>
            <p className="text-whiteHigh text-2xl font-bold pb-3">
              An access key was emailed to
              <span className="font-black">{email}</span> with this link. Please
              enter it bellow.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 pb-16">
            <input
              required
              type="text"
              onChange={handleCodeChange}
              placeholder="Enter access key here"
              className="input w-full max-w-6xl border-2 text-blackMid border-btnGradientEnd"
            ></input>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="btn px-12 bg-gradient-to-r text-xl from-btnGradientStart to-btnGradientEnd normal-case border-none"
            >
              Validate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthHero;
