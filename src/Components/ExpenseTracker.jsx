import React, { useEffect, useState } from "react";
import "./ExpenseTracker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ExpenseTracker() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const[seach,setSearch]=useState("")
  const [input, setInput] = useState({
    name: "",
    amount: "",
    date: "",
    type: "income", // Default type
  });
  const [idCounter, setIdCounter] = useState(1);

  // handle change function for inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: type === "checkbox" ? (checked ? "expense" : "income") : value,
    }));
    console.log(name)
  };

  // handle submit function for handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { ...input, id: idCounter };
    // const newTransaction={
      // id:1 
    //   name: "prashanth",
    //   amount: "1000",
    //   date: "20/12/2024",
    //   type: "income",
    // }

   

    setIdCounter((prevIdCounter) => prevIdCounter + 1);

    setTransactions((prevTransactions) => {
      const updatedTransactions = [...prevTransactions, newTransaction];
      saveTrans(updatedTransactions);

      return updatedTransactions;
    });

    // Reset form
    setInput({
      name: "",
      amount: "",
      date: "",
      type: "income",
    });
  };

 

  // Function to calculate total income and expenses
  const calculateTotals = () => {
    const incomeTotal = transactions
      .filter((tra) => tra.type === "income")
      .reduce((total, tra) => total + parseFloat(tra.amount), 0);

    const expenseTotal = transactions
      .filter((tra) => tra.type === "expense")
      .reduce((total, tra) => total + parseFloat(tra.amount), 0);

    return {
      incomeTotal,
      expenseTotal,
    };
  };

  const { incomeTotal, expenseTotal } = calculateTotals();
  const totalBalance = incomeTotal - expenseTotal;
  // transaction format for display rupee
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    signDisplay: "always",
  });
// search data
  const searchdata=transactions.filter((namesearch)=>{
    return(
    namesearch.name.toLowerCase().includes(seach.toLowerCase())
    )
  })

console.log(searchdata)
// delete data
const handleDelete=(id)=>{
  alert(id)
const deldata=transactions.filter((deldata)=>{
  return(
    deldata.id!==id
  )
})
saveTrans(deldata)
setTransactions(deldata);
 
 
console.log(deldata)
}
const saveTrans = (transactionsToSave) => {
  transactionsToSave.sort((a, b) => new Date(b.date) - new Date(a.date));
  localStorage.setItem("transactions", JSON.stringify(transactionsToSave));
}
  return (
    <>
   
      <h3 className="text-center">Expense Tracker</h3>
      <div className="main_div1">
        <div className="dashBoard">
          <div className="totalbalace align">
            <p>TOTAL BALANCE</p>
            {totalBalance <= 0 ? (
              <h5 style={{ color: "red", fontWeight: "700" }}>
                {formatter.format(totalBalance)}
              </h5>
            ) : (
              <h5 style={{ color: "green", fontWeight: "700" }}>
                {formatter.format(totalBalance)}
              </h5>
            )}
          </div>
          <div className="income_expense d-flex">
            <div className="income col-6 align">
              <p>Income</p>
              <h6>{formatter.format(incomeTotal)}</h6>
            </div>
            <div className="expense col-6 align">
              <p>Expense</p>
              <h6>{formatter.format(expenseTotal*-1)}</h6>
            </div>
          </div>
        </div>
        <h4 className="mt-3">Add Transaction</h4>
        <div>
          <form action="#" onSubmit={handleSubmit} className="formdiv">
            <div>
              <label htmlFor="type" className="type">
                <input
                  type="checkbox"
                  name="type"
                  id="type"
                  onChange={handleChange}
                  checked={input.type === "expense"}
                />
                <div className="option">
                  <span>income</span>
                  <span>expense</span>
                </div>
              </label>
            </div>

            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={input.name}
                onChange={handleChange}
              />
            </div>
            <div className="amount">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={input.amount}
                onChange={handleChange}
              />
            </div>
            <div className="date">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={input.date}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="search mt-5">
          <input
          className="form-control"
            type="text"
            value={seach}
            name="search"
            id="search"
            placeholder="Search....."
            onChange={(e)=>setSearch(e.target.value)}

          />
        </div>
        <div className="displayData">
          <h5 className="mt-5">{transactions.length<=0?" No Transactions":"Transactions"}</h5>

          {searchdata.map((eachData) => (
            <div key={eachData.id} className="namedatedisplay">
              <div className="namedate">
                <h6>{eachData.name}</h6>
                <p>{eachData.date}</p>
              </div>

              <div className="amountdisplay" style={{color:eachData.type === "income" ?"green":"red"}} >
                <p>
                  {formatter.format(
                    eachData.amount * (eachData.type === "income" ? 1 : -1)
                  )}
                </p>

              </div>
              <div className="deletedata" style={{width:"20px",color:"red"}}>
              <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(eachData.id)}/>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExpenseTracker;
