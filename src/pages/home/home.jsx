import React from "react";
import Typed from "typed.js";
import js from "../../assets/icons/js.webp";
import css from "../../assets/icons/css.png";
import react from "../../assets/icons/react.png";
import tailwind from "../../assets/icons/tailwind.png";
import next from "../../assets/icons/next-js.svg";
import bootstrap from "../../assets/icons/bootstrap.png";
import redux from "../../assets/icons/redux.png";
import html from "../../assets/icons/html.png";
import github from "../../assets/icons/github.png";
import ts from "../../assets/icons/ts.png";

export const Home = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Student.", "Web developer."],
      typeSpeed: 80,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="h-[85vh]">
      {/* for background */}
      <div className="bg-whites">
        <div className="item-1"></div>
      </div>

      {/* for content */}
      <div className="container">
        <div className="wrapper flex justify-between">
          <div className="content">
            <div className=" flex items-end gap-2 pt-[160px]">
              <span className="text-[60px] font-bold">Hi, I'm</span>
              <span
                className="text-[60px] font-black text-[#4070f4]"
                ref={el}
              />
            </div>
            <p className="font-sans text-2xl py-1 leading-[40px] w-[620px] text-cyan-100 font-medium">
              My name is&nbsp;
              <span className="text-[#4070f4] font-black text-[24px]">
                Elshod
              </span>
              . I'm 20. From Tashkent. I wanna grow and develop together with a
              united team. Of course, I’ll try to make good results.
            </p>
          </div>
          <div className="icons flex items-center flex-row-reverse pt-[60px] gap-5">
            {/* html css js bootstrap*/}
            <div
              id="first_block"
              className="h-[500px]  flex flex-col items-center justify-between"
            >
              <div
                id="html-item"
                className="bg-white flex items-center justify-center px-3 rounded-full h-[110px]"
              >
                <img className="w-[90px] rounded-full" src={html} alt="icon" />
              </div>
              <div
                id="css-item"
                className="bg-white  flex items-center justify-center rounded-full p-4 "
              >
                <img className="w-[70px]" src={css} alt="icon" />
              </div>
              <div
                id="js-item"
                className="bg-white w-[100px] flex items-center justify-center rounded-full p-2"
              >
                <img src={js} alt="icon" />
              </div>
              <div
                id="bootstrap-item"
                className="bg-white flex items-center justify-center px-3 rounded-full h-[110px]"
              >
                <img
                  className="w-[90px] rounded-full"
                  src={bootstrap}
                  alt="icon"
                />
              </div>
            </div>
            {/* tailwind github redux */}
            <div
              id="second_block"
              className="h-[380px] flex flex-col items-center justify-between"
            >
              <div
                id="tailwind-item"
                className="bg-white  flex items-center justify-center rounded-full p-2 h-[100px]"
              >
                <img className="w-[90px]" src={tailwind} alt="icon" />
              </div>
              <div
                id="github-item"
                className="bg-white flex items-center justify-center rounded-full"
              >
                <img className="w-[100px]" src={github} alt="icon" />
              </div>
              <div
                id="redux-item"
                className="bg-white flex items-center justify-center px-3 rounded-full h-[110px]"
              >
                <img className="w-[90px] rounded-full" src={redux} alt="icon" />
              </div>
            </div>
            {/* react typescript */}
            <div
              id="third_block"
              className="h-[240px] flex flex-col items-center justify-between"
            >
              <div
                id="react-item"
                className="bg-white w-[100px] h-[100px]  flex items-center justify-center rounded-full"
              >
                <img className="w-[90px]" src={react} alt="icon" />
              </div>
              <div
                id="ts-item"
                className="bg-white  flex items-center justify-center rounded-full "
              >
                <img className="w-[100px] rounded-full" src={ts} alt="icon" />
              </div>
            </div>
            {/* next */}
            <div id="fourth_block">
              <div
                id="next-item"
                className="bg-white flex items-center justify-center rounded-full h-[90px] "
              >
                <img className="w-[100px] rounded-full" src={next} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
