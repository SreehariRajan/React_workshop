import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Button } from 'primereact/button';
import { editBlog } from '../apis/edit';
import { BASE_URL } from '../constants/url';

function EditBlog(props) {

    const { id } = useParams();

    const { error, isPending, data } = useFetch(BASE_URL + '/blogs/all/?id=' + id);

    console.log(data, error, isPending)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data !== null) {
            setTitle(data.data[0].title);
            setBody(data.data[0].body);
        }
    }, [data]);

    const handleSubmit = async () => {
        const data = {
            id: parseInt(id),
            title: title,
            body: body
        }
        setLoading(true);
        const response = await editBlog(data);
        setLoading(false);

        console.log(response)

    }

    return (
        <div className='w-full flex flex-col p-5 md:p-10'>
            <h1 className='text-3xl font-bold mb-10'>Edit Blog</h1>
            {
                isPending ?
                    "loading"
                    :
                    (!error ?
                        data !== null &&
                        <div className='w-full flex flex-col w-full md:w-3/4'>
                            <span className='flex flex-col items-start mb-4 w-full'>
                                <p className='font-bold'>Title</p>
                                <input className=' border border-[#6366F1] rounded-md mt-2 w-full p-2' onChange={(e) => setTitle(e.target.value)} value={title} />
                            </span>
                            <span className='flex flex-col items-start mb-4 w-full'>
                                <p className='font-bold'>Body</p>
                                <textarea className='w-full border border-[#6366F1] rounded-md min-h-[200px] p-2 mt-2' onChange={(e) => setBody(e.target.value)} value={body} />
                            </span>
                            <div>
                                <Button label="Submit" icon="pi pi-check" loading={loading} onClick={handleSubmit} />

                            </div>
                        </div>

                        :
                        <p>{error}</p>
                    )
            }


        </div>
    );
}

export default EditBlog;