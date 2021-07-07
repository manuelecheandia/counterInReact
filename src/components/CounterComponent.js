import React from 'react';

const CounterComponent = () =>{

    const [counter, setCounter] = React.useState(0);

    const increase = () => setCounter ( counter + 1 );
    const decrease = () => setCounter ( counter - 1 )

    return (
        <div>
            <h1>Counter: {counter} </h1>
            <hr/>
            <button onClick={decrease}  >Decrease (-)</button>
            <button onClick={increase}  >Increase (+)</button>
            
        </div>
    )
};

export default CounterComponent;