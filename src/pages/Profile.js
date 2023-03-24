import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Button } from 'primereact/button';
import { editBlog } from '../apis/edit';
import { BASE_URL } from '../constants/url';
import { addBlog } from '../apis/add';
import { Toast } from 'primereact/toast';
import { UserContext } from '../context/UserContext';


function Profile(props) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);
    const [tempName, setTempName] = useState("");
    const [tempJob, setTempJob] = useState("");

    const { nameState, jobState } = useContext(UserContext);
    const [name, setName] = nameState;
    const [job, setJob] = jobState;


    const handleSubmit = async (e) => {
        e.preventDefault();
        setName(tempName);
        setJob(tempJob);
        showToast('success', 'Success Message', 'Added successfully.')


    }

    const showToast = (severityValue, summaryValue, detailValue) => {
        toast.current.show({ severity: severityValue, summary: summaryValue, detail: detailValue });
    }


    useEffect(() => {
        setTempName(name);
        setTempJob(job);
    }, [name, job]);

    return (
        <div className='w-full flex flex-col p-5 md:p-10'>
            <h1 className='text-3xl font-bold mb-10'>Profile</h1>

            <form onSubmit={handleSubmit} className='w-full flex flex-col w-full md:w-3/4'>
                <span className='flex flex-col items-start mb-4 w-full'>
                    <p className='font-bold'>Name</p>
                    <input required className=' border border-[#6366F1] rounded-md mt-2 w-full p-2' onChange={(e) => setTempName(e.target.value)} value={tempName} />
                </span>
                <span className='flex flex-col items-start mb-4 w-full'>
                    <p className='font-bold'>Job Title</p>
                    <input required className='w-full border border-[#6366F1] rounded-md p-2 mt-2' onChange={(e) => setTempJob(e.target.value)} value={tempJob} />
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

export default Profile;