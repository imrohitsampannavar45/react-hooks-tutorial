import React, { useState } from 'react'

const Example3 = () => {
    let [count, setCount] = useState(0);

    let [counter, setCounter] = useState(0);

    let [counters, setCounters] = useState(0);



    function Increment() {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);

    }
    function Decrement() {
        setCounter(counter => counter - 1);
        setCounter(counter => counter - 1);
        setCounter(counter => counter - 1);
        setCounter(counter => counter - 1);

    }
    function Multiply() {
        setCounters(counters * 2)
        counters++
    }

    return (

        <>

            <h1>Count : {count}</h1>

            <button onClick={Increment}> Increase</button>

            <h1>Count : {counter}</h1>
            <button onClick={Decrement}>Decrement</button>


            <h1>Count : {counters}</h1>
            <button onClick={Multiply}>Multiply</button>
        </>
    )
}

export default Example3
