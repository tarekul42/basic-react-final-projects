import React from 'react';

const Blog = (props) => {
    const {blog_picture, author_name, publish_date, author_picture, title, id, minutes} = props.blog;
    const addBookmarked = props.addBookmarked;
    const addSpentTime = props.addSpentTime;

    

    return (
                <div key={id} className='border-b mb-12'>
                    <img className='w-full rounded-lg my-4' src={blog_picture} alt=""/>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <img className='h-16 w-16 rounded-full' src={author_picture} alt="" />
                            <div>
                                <h1 className='text-2xl font-semibold'>{author_name}</h1>
                                <p>{publish_date}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='flex'>
                                <span className='pr-1'>
                                {minutes} min read
                                </span>
                                <span className='cursor-pointer' onClick={() => addBookmarked(props.blog)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>

                                </span>
                            </h1>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold leading-relaxed py-4'>{title}</h3>
                    <p>#beginners <span>&nbsp;&nbsp;&nbsp;</span> #programming</p>

                    <p onClick={() =>  addSpentTime(props.blog.minutes)} className='text-primary underline py-4 cursor-pointer inline-block'>Mark as read</p>
                </div>
    );
};

export default Blog;
// this is blog section and it would be return blog