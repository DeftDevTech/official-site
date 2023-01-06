import React from "react";
import mousecursor from "../../common/mouseEffect";

const Cursor = () => {
  React.useEffect(() => {
    mousecursor();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
