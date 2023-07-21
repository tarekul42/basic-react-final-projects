import React from 'react';

const Header = () => {
    return (
        <>
        <div className='flex justify-between my-6 items-center'>
            <h1 className='text-5xl font-semibold'>Knowledge Cafe</h1>
            <img className='h-16 w-16 rounded-full' src="https://c.stocksy.com/a/i8J500/z9/1265216.jpg" alt="Blog-writer-picture" />
        </div>
        <hr className='mb-5' />
        </>
    );
};

export default Header;