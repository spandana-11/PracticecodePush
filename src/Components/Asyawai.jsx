import React from 'react'

function Asyawai() {
    async function fetchdata(){
await fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json()
.then(jsondata=>console.log(jsondata))
)
    }
    fetchdata()
  return (
    <div>

    </div>
  )
}

export default Asyawai