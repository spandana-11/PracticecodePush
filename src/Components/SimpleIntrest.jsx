import React, { useState } from "react";
import Header from "./Loancalc";
// import { useNavigate } from "react-router-dom";
import { Optcontext } from "./Cartcontex";

const SimpleIntrest = () => {
  const { hi } = Optcontext();
//   const navigate = useNavigate();
  const [data, getData] = useState({
    principleAmount: "",
    AnnualRate: "",
    periodUnit: "",
    periodValue: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // navigate(<Header />);
  };
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <form action="" className="w-25" onSubmit={handlesubmit}>
        <h5 className="text-primary text-center">SimpleIntrest Caluculator</h5>
        <label className="label-control" htmlFor="pamt">
          Principle Amount
        </label>
        <input
          className="form-control"
          type="number"
          name="pamt"
          id="pamt"
          onChange={(e) => {
            getData({ ...data, principleAmount: e.target.value });
          }}
        />
        <label className="label-control" htmlFor="arate">
          Annual Rate
        </label>
        <input
          className="form-control"
          type="number"
          name="arate"
          id="arate"
          onChange={(e) => {
            getData({ ...data, AnnualRate: e.target.value });
          }}
        />
        <label className="label-control" htmlFor="punit">
          Period Unit
        </label>
        <input
          className="form-control"
          type="number"
          name="punit"
          id="punit"
          onChange={(e) => {
            getData({ ...data, periodUnit: e.target.value });
          }}
        />
        <label className="label-control" htmlFor="pvalue">
          Period Value
        </label>
        <input
          className="form-control"
          type="number"
          name="pvalue"
          id="pvalue"
          onChange={(e) => {
            getData({ ...data, periodValue: e.target.value });
          }}
        />
        <button className="btn btn-primary mt-3" type="submit" onClick={hi}>
          Caluculate
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default SimpleIntrest;
