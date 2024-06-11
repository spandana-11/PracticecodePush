import React, { useState } from "react";

const Loancalc = () => {
  const [data, setData] = useState({
    loanamount: "",
    downpayment: "",
    rateOfIntrest: "",
    loanterm: "",
  });
  const[calc,setcalc]=useState({
    monthlypayment: "",
    totalLoanPayment: "",
    totalIntrest: ""
    
  })
  const [show, setshow] = useState(false);
  console.log(data);
  const handlesubmit = (e) => {
    e.preventDefault();
    setshow(true);
    alert("hello")


    //principal amount
    const principalamount=Number(data.loanamount)
    const calculateIntrest=Number(data.rateOfIntrest)/100/12;
    const calculatepayments=Number(data.loanterm)*12;
    const x=Math.pow(1+calculateIntrest,calculatepayments);
    const monthly=(principalamount*x*calculateIntrest)/(x-1)
if(isFinite(monthly)){
    const monthlypayment=monthly.toFixed(2)
    const totalLoanPayment=(monthly*calculatepayments).toFixed(2)
    const totalIntrest=(monthly*calculatepayments-principalamount).toFixed(2)
    setcalc({
        monthlypayment:monthlypayment,
    totalLoanPayment:totalLoanPayment,
    totalIntrest:totalIntrest 
    })
}
 return ;  
  };

  return (
    <div>
      <form onSubmit={handlesubmit}
        action=""
        className="w-50 d-flex justify-content-center align-item-center "
      >
        <div className="row">
          <label className="col-6">loan amount</label>
          <input
            type="text"
            className="col-6 mt-2"
            value={data.loanamount}
            onChange={(e) => setData({ ...data, loanamount: e.target.value })}
          />

          <label className="col-6">down payment</label>
          <input
            type="text"
            className="col-6 mt-2"
            value={data.downpayment}
            onChange={(e) => setData({ ...data, downpayment: e.target.value })}
          />

          <label className="col-6">Rate of Intrest</label>
          <input
            type="text"
            className="col-6 mt-2"
            value={data.rateOfIntrest}
            onChange={(e) =>
              setData({ ...data, rateOfIntrest: e.target.value })
            }
          />

          <label className="col-6">loan term</label>
          <input
            type="text"
            className="col-6 mt-2"
            value={data.loanterm}
            onChange={(e) => setData({ ...data, loanterm: e.target.value })}
          />

          <button
            type="submit"
            
            className="btn btn-success w-25 mt-3 "
          >
            caluculate
          </button>
        </div>
      </form>
      {show ? (
        <div className="result ">
          <p>monthly payment:{calc.monthlypayment}</p>
          <p>total loan payment:{calc.totalLoanPayment}</p>
          <p>total intrest amount: {calc.totalIntrest}</p>
        </div>
      ):"please fill all the details before submit"}
    </div>
  );
};

export default Loancalc;
