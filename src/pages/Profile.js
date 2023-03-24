import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { UserContext } from '../context/UserContext';
import { ToastContext } from '../context/ToastContext';


function Profile(props) {

    const [loading, setLoading] = useState(false);
    const [tempName, setTempName] = useState("");
    const [tempJob, setTempJob] = useState("");

    const { nameState, jobState } = useContext(UserContext);
    const { showToast } = useContext(ToastContext)
    const [name, setName] = nameState;
    const [job, setJob] = jobState;


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setName(tempName);
        setJob(tempJob);
        setLoading(false);
        showToast('success', 'Success Message', 'Added successfully.')


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
            </form>




        </div>
    );
}

export default Profile;