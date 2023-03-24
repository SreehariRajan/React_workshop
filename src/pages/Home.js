import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard.js';
import { BASE_URL } from '../constants/url.js';
import useFetch from '../hooks/useFetch';
import { ProgressSpinner } from 'primereact/progressspinner';

function Home() {

    const { error, isPending, data } = useFetch(BASE_URL + '/blogs/all/');

    console.log(data, error, isPending)
    return (
        <div className='w-full flex flex-col p-5 md:p-10'>
            <h1 className='text-3xl font-bold mb-10'>Blogs</h1>
            {
                isPending ?
                    <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="4" stroke="red" color='red' animationDuration="1s" />
                    :
                    (!error ?
                        <div className='grid grid-cols-1  md:grid-cols-3 '>

                            {data !== null && data.data.map((item, index) => {
                                return (
                                    <BlogCard key={index} id={item.id} title={item.title} body={item.body} author={item.author_name} />
                                )
                            })}
                        </div>
                        :
                        <p>{error}</p>
                    )
            }

            <Link className='fixed bottom-5 right-5 rounded-full bg-[#6366F1] p-3 flex items-center justify-center' to="/add">
                <i className="pi pi-plus" style={{ fontSize: '1.5rem', color: 'white' }}></i>
            </Link>
        </div>
    );
}

export default Home;