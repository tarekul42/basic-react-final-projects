import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Cards = () => {

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='grid grid-cols-3 justify-items-center m-4 gap-8'>
                <Card></Card>
            </div>
        </div>
    );
};

export default Cards;