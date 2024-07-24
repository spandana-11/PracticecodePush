import React from 'react'

function Propsstate({name,age,handleclick}) {

  return (
    <div>
        <h1>{name},{age}</h1>
    <button onClick={handleclick()}>h</button>
    </div>
  )
}

export default Propsstate