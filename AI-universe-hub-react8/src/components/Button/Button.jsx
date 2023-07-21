import React from 'react';

const Button = (props) => {
    return (
        <div>
        <button className='bg-accent text-2xl font-semibold text-stone-800 px-4 py-2 rounded-lg'>{props.children}</button>
        </div>
    );
};

export default Button;