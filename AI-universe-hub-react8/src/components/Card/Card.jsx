import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [card, setCard] = useState([]);
    const [singleData, setSingleData] = useState({})
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setuniqueId] = useState(null);

    useEffect(() =>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res => res.json())
        .then(data => setSingleData(data.data))
    },[uniqueId])

    // const handleId = (id) =>{
    //     fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    //     .then(res => res.json())
    //     .then(data => setuniqueId(data.data))
    // }

    const handleShowAll = () =>{
        setShowAll(!showAll);
    }
   
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setCard(data.data.tools))
    }, [])
    return (
        <>
            {
                card.slice(0, showAll ? 12 : 6).map(item => (
                    <div className="m-4" key={item.id}>
                        <div className="border rounded-lg p-4 h-full">
                            <img className='w-full h-72 rounded-lg' src={item.image} alt="" />
                            <div className='my-2'>
                                <h1 className='text-3xl font-semibold my-2'>Features</h1>
                                {
                                    item.features?.map((feature, index) => (
                                        <p>
                                            {index + 1}. {feature}
                                        </p>
                                    ))
                                }
                                <hr className='my-4' />
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1 className='text-3xl font-semibold my-2'>{item.name}</h1>
                                        <p className='flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='fill-gray-400 pr-2'>
                                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" /></svg>
                                            {item.published_in}</p>
                                    </div>
                                    {/* right arrow */}
                                    <label onClick={() => setuniqueId(item.id)}  className='fill-gray-400 text-3xl cursor-pointer'>
                                    <button onClick={()=>window.my_modal_4.showModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">

                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                    </button>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
            <div></div>
                <div>
                    {!showAll && (
                    <p onClick={handleShowAll} className='cursor-pointer'>
                       <Button>Show All</Button>
                    </p>
                    )}
                </div>
            <div></div>
            <Modal singleData={singleData}></Modal>
        </>
    );
};

export default Card;