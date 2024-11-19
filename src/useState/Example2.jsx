import React from 'react'
import { useState } from 'react'
const Example2 = () => {
    const [car, setcar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2023",
        color: "Red"
    });

    const changeColor = () => {
        setcar((prev) => {
            return { ...prev, color: "blue" }
        })
    }


    return (
        <>
            <h1>My {car.brand} </h1>
            <h2>It is {car.color} {car.model} a red Rome from, {car.year}</h2>
            <button onClick={changeColor}>Blue</button>


        </>
    )
}

export default Example2
