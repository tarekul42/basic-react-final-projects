import React from 'react';

const Bookmarked = (props) => {

    return (
        <div className='p-4 bg-slate-800 my-4 rounded-lg'>
            <h1 className='text-3xl font-semibold py-4'>Bookmarked Blogs : {props.bookmarked.length} </h1>
            {
                props.bookmarked.map((blog) => {
                        return (
                            <div className='p-4 bg-neutral-800 rounded-lg mb-4' key={blog.id}>
                                <h1>{blog.title}</h1>
                            </div>
                        )
                                })
            }
        </div>
    );
};

export default Bookmarked;