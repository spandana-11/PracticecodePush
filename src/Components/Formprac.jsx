import React, { useState } from "react";
import "./Formprac.css";

function Formprac() {
    const[inputdata,setInputdata]=useState({
        uname:"",
        mail:"",
        psw:"",
    })
    console.log(inputdata)
    // onchange function
    const handlechange=(e)=>{
const {name,value}=e.target;
setInputdata((prevdata)=>({
    ...prevdata,
    [name]:value
}))
    }
    // handle submit
    const handlesubmit=(e)=>{
e.preventDefault()

    }
  return (
    <div>
      <form action="#" className="w-100 mt-3 " onSubmit={handlesubmit}>
        <div className="formfields">
          <div className="fields">
            <label htmlFor="uname" className="label-control">
              User Name
            </label>
            <input
              type="text"
              name="uname"
              id="uname"
              className="form-control"
              placeholder="Enter user name"
              onChange={handlechange}
            />
          </div>
          <div className="fields">
            <label htmlFor="psw" className="label-control">
              Password
            </label>
            <input
              type="password"
              name="psw"
              id="psw"
              className="form-control"
              placeholder="Enter your password"
              onChange={handlechange}

            />
          </div>
          <div className="fields">
            <label htmlFor="mail" className="label-control">
              Email
            </label>
            <input
              type="email"
              name="mail"
              id="mail"
              className="form-control"
              placeholder="Enter your Email-id"
              onChange={handlechange}

            />
          </div>
          <div className="fields">
            <button className="btn btn-primary">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formprac;
