import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {
    const [count, setCount] = useState(value);

    const addOne = () => {
        //setCount(count + 1);
        setCount((c) => c + 1)
    };

    const reset = () => {
        setCount(value);
    };

    const lessOne = () => {
        setCount((c) => c - 1)
    };

    return (
        <>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={lessOne}>-1</button>
            
        </>
    );
}

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number
}
