import React from "react";
import { Optcontext } from "./Cartcontex";
import Cartcomponent from "./Cartcomponent";

const Product = () => {
  const { drinksData,addtocart } = Optcontext(); // Use useContext hook to access context
 

  return (
    
    <>
    <Cartcomponent/>
      <div className="d-flex gap-5 flex-wrap w-100" >
        {drinksData.map((eachitem) => {
          return (
            <>
              <div style={{width:"220px"}}  key={eachitem.idDrink}>
                <img style={{width:"100%"}} src={eachitem.strDrinkThumb} alt={eachitem.strDrink} />
                <h6>{eachitem.strDrink}</h6>
                <p>{eachitem.strCategory}</p>
                <button className="btn btn-success" onClick={()=>addtocart(eachitem )}>add to cart</button>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
