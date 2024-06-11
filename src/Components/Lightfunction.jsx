import React, { useState } from "react";
import "./Lightfunction.css";
const Lightfunction = () => {
  const [onoff, setOnoff] = useState(false);
  const on_off_func = () => {
    setOnoff(!onoff);
  };

  return (
    <>
      <div className="on_off_btn" onClick={on_off_func}>
        <button>
          {onoff ? (
             <i
             class="fa fa-power-off"
             aria-hidden="true"
             style={{ color: "red" }}
           ></i>
           
          ) : (
            <i
              class="fa fa-power-off"
              aria-hidden="true"
              style={{ color: "green" }}
            ></i>
          )}
        </button>
        <div className="img_div">
          {onoff ? (
            <img src="./ligth_off.png" alt="lightoff" width={"100%"} />
          ) : (
            <img src="./ligth_on.png" alt="" width={"100%"} />
          )}
        </div>
      </div>
    </>
  );
};

export default Lightfunction;
