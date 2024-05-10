import React from "react";
import Typed from "typed.js";
import js from "../../assets/icons/js.webp";
import css from "../../assets/icons/css.png";
import react from "../../assets/icons/react.png";
import tailwind from "../../assets/icons/tailwind.png";

export const Home = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Student.", "Frontend developer."],
      typeSpeed: 80,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="h-[85vh]">
      <div className="bg-whites">
        <div className="item-1"></div>
      </div>
      <div className="container">
        <div className="wrapper flex relative">
          <div className="content">
            <div className=" flex items-end gap-2 pt-[100px]">
              <span className="text-[60px] font-bold">Hi, I'm</span>
              <span
                className="text-[60px] font-black text-[#4070f4]"
                ref={el}
              />
            </div>
            <p className="font-sans text-2xl py-1 leading-[40px] w-[620px]">
              My name is
              <span className="text-[#4070f4] font-black text-[24px]">
                Elshod
              </span>
              . I'm 20. From Tashkent. I wanna grow and develop together with a
              united team. Of course, I’ll tryto make good
              resultsStandardization
            </p>
          </div>
          <div className="icons">
            <div
              id="js-item"
              className="bg-white w-[100px] flex items-center justify-center rounded-full p-2 ring-8 ring-orange-500 absolute  right-[200px] top-[200px]"
            >
              <img src={js} alt="icon" />
            </div>
            <div
              id="css-item"
              className="bg-white  flex items-center justify-center rounded-full p-4 ring-8 ring-blue-700 absolute  right-[10px] top-[300px]"
            >
              <img className="w-[70px]" src={css} alt="icon" />
            </div>
            <div
              id="react-item"
              className="bg-white  flex items-center justify-center rounded-full p-2  absolute  right-[40px] top-[100px]"
            >
              <img className="w-[90px]" src={react} alt="icon" />
            </div>
            <div
              id="tailwind-item"
              className="bg-white  flex items-center justify-center rounded-full p-2 h-[100px] absolute  right-[120px] top-[400px]"
            >
              <img className="w-[90px]" src={tailwind} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
