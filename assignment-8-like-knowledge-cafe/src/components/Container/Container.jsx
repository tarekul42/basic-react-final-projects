import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import SpentTime from '../SpentTime/SpentTime';
import Bookmarked from '../Bookmarked/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarked, setBookmarked] = useState([])
    const [spentTime, setSpentTime] = useState([])

    const addBookmarked = blogs =>{
      setBookmarked([...bookmarked, blogs])
    }

    const addSpentTime = blogs =>{
      setSpentTime([...spentTime, blogs])
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('blogs-file.json');
              const data = await response.json();
              return setBlogs(data.blogs);
            }
            catch (error) {
              throw new Error('Error fetching data: ' + error);
            }
          };
          fetchData();
    },[])
      


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <Blogs blogs={blogs} addBookmarked={addBookmarked} addSpentTime={addSpentTime}></Blogs>
                
            <div className='min-h-fit'>
              <SpentTime spentTime={spentTime}></SpentTime>
              <Bookmarked bookmarked={bookmarked}></Bookmarked>
            </div>
        </div>
    );
};

export default Container;