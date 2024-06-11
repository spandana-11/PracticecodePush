import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [data, setData] = useState([]) // Initialize as an array
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setData(response.data)
                setFilteredData(response.data) // Initialize filteredData with all data
            })
    }, [])

    useEffect(() => {
        const results = data.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        )
        setFilteredData(results)
    }, [search, data])

    return (
        <div>
            <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name"
            />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((eachuser) => (
                        <tr key={eachuser.id}>
                            <td>{eachuser.id}</td>
                            <td>{eachuser.name}</td>
                            <td>{eachuser.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchData
