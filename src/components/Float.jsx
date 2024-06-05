import { useState } from "react";

export const Float = () => {
    const [visibility, setVisibility] = useState("");

    function CloseFloat() {
        setVisibility("hidden")
    }
  return (
    <>
      <div className={`fixed z-20 right-32 bottom-24 ${visibility}`}>
        <div className="relative">
          <a href="/">
            <img
              src="assets/img/float.gif"
              alt="Float Baner"
              className="w-[90px] h-[90px]"
            />
          </a>
          <div className="z-30 absolute top-0 right-0 w-[24px] h-[24px] cursor-pointer" onClick={CloseFloat}></div>
        </div>
      </div>
    </>
  );
};
