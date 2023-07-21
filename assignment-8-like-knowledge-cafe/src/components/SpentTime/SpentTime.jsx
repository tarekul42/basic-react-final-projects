import React from 'react';

const SpentTime = (props) => {
    const time = props.spentTime;
    const sum = time.reduce((a, b) => a + b, 0);
    return (
        <div className='border rounded-lg text-center text-2xl font-semibold py-4 mt-4'>
            <h1>Spent time on read : {sum} min</h1>
        </div>
    );
};

export default SpentTime;