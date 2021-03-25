import React, { useState, useEffect } from "react";
import { Home } from "pages/Home";
import { Loader } from "components/Loader";

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 1500);
  }, [contentLoaded]);

  return (
    <>
      <div className={contentLoaded ? "wrapper" : "hhh"}>
        <Home />
      </div>

      {!contentLoaded && <Loader />}
    </>
  );
}

export default App;
