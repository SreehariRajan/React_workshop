import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { addBlog } from '../apis/blog';
import { ToastContext } from '../context/ToastContext';


function AddBlog() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const { showToast } = useContext(ToastContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            body: body
        }
        setLoading(true);
        const response = await addBlog(data);
        setLoading(false);

        if (response.status === 200) {
            showToast('success', 'Success', 'Added successfully.')
        } else {
            showToast('error', 'Failed', 'Failed to add.')
        }

    }


    return (
        <div className='w-full flex flex-col p-5 md:p-10'>
            <h1 className='text-3xl font-bold mb-10'>Add Blog</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col w-full md:w-3/4'>
                <span className='flex flex-col items-start mb-4 w-full'>
                    <p className='font-bold'>Title</p>
                    <input required className=' border border-[#6366F1] rounded-md mt-2 w-full p-2' onChange={(e) => setTitle(e.target.value)} value={title} />
                </span>
                <span className='flex flex-col items-start mb-4 w-full'>
                    <p className='font-bold'>Body</p>
                    <textarea required className='w-full border border-[#6366F1] rounded-md min-h-[200px] p-2 mt-2' onChange={(e) => setBody(e.target.value)} value={body} />
                </span>
                <div className='mb-5'>
                    <Button label="Submit" icon="pi pi-check" loading={loading} onSubmit={handleSubmit} />
                </div>
            </form>
        </div>
    );
}

export default AddBlog;