import React from 'react'
import { Optcontext } from './Cartcontex'

const Cartcomponent = () => {
    const{addedData}=Optcontext();
  return (
    <div className='w-100 mb-3' style={{ height: "30px", background: "pink", position: "relative" }}>
    <img src="./notification.png" alt="notification" style={{ width: "20px", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}  />
    <p>{addedData.length}</p>
  </div>
  
  )
}

export default Cartcomponent