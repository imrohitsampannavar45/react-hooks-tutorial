import React, { useState } from 'react'

const Example1 = () => {

    const [color, setColor] = useState("Red")



    const changeColor = () => {
        setColor("Blue");
    }



    return (
        <>

            <div>
                <h1>My favoriate color is {color}</h1>
                <button onClick={changeColor}>Blue</button>
            </div>

            < hr />





        </>
    )
}

export default Example1
