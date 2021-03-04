import React, { useState, useEffect } from "react";

const ScrollToTop = ({ headerScroll }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setIsTop(window.pageYOffset < 100);
    });
  }, []);

  return (
    <a
      className={
        !isTop ? "scroll-to-top active scroll" : "scroll-to-top scroll"
      }
      href="#wrapper"
      onClick={headerScroll}
    >
      <span className="fa fa-arrow-up top-icon" />
    </a>
  );
};

export { ScrollToTop };
