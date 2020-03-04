import React from 'react';
const Counter = ({ value, onIncrement, onDecrement, onReset }) => {
    return (
        <div>
            <h1>myCounter</h1>
            <h2>{value}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>reset</button>
        </div>
    )
}
export default Counter;