import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Button } from 'primereact/button';
import { editBlog } from '../apis/edit';
import { BASE_URL } from '../constants/url';
import { addBlog } from '../apis/add';
import { Toast } from 'primereact/toast';


function AddBlog(props) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            body: body
        }
        setLoading(true);
        const response = await addBlog(data);
        setLoading(false);

        console.log(response)
        toast?.current.show();
        if (response.status === 200) {
            if (toast.current !== null)
                showToast('success', 'Success Message', 'Added successfully.')
        }

    }

    const showToast = (severityValue, summaryValue, detailValue) => {
        toast.current.show({ severity: severityValue, summary: summaryValue, detail: detailValue });
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
                <div>
                    <Toast ref={toast} />
                </div>
            </form>




        </div>
    );
}

export default AddBlog;