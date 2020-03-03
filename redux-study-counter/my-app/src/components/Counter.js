import React from 'react';
const Counter = ({ value, onIncrement, onDecrement }) => {
    return (
        <div>
            <h1>myCounter</h1>
            <h2>{value}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}
export default Counter;