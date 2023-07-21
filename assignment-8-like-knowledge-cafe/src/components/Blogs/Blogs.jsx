import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = (props) => {
    const addBookmarked = props.addBookmarked;
    const  addSpentTime = props.addSpentTime;

    // console.log(props.addBookmarked);
    return (
        <div className='col-span-2'>
            {
                props.blogs.map(blog => <Blog key={blog.id} blog={blog} addBookmarked={addBookmarked} addSpentTime={addSpentTime} />)
            }
        </div>
    );
};

export default Blogs;