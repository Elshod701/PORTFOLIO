import React from "react";
import Typed from "typed.js";

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
        <div className="item-2"></div>
        <div className="item-3"></div>
      </div>
      <div className="container">
        <div className="content flex items-end gap-2 pt-[100px]">
          <span className="text-3xl font-bold">Hi, I'm</span>
          <span className="text-4xl font-black text-[#4070f4]" ref={el} />
        </div>
      </div>
    </section>
  );
};
