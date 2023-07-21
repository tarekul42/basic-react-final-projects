import React from 'react';
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold m-3'>Ai Universe Hub</h1>
            <Button>Sort By Date</Button>
        </div>
    );
};

export default Header;