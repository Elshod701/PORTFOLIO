import React from "react";
import { useLocation } from "react-router-dom";

const UseScrollTop = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <></>;
};

export default UseScrollTop;
