import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function NavBar(props) {
    const { nameState } = useContext(UserContext);
    const [name, setName] = nameState;
    return (
        <div className='w-full bg-[#6366F1] text-white p-5 flex justify-between'>
            <Link to="/"> <i className="pi pi-home" style={{ fontSize: '1.5rem' }}></i></Link>
            <div className='flex items-center'>
                {name.length > 0 && <p className='mr-10'>Hey <span className='font-bold'>{name}</span></p>}
                <Link to="/profile">
                    <i className="pi pi-user" style={{ fontSize: '1.5rem' }}></i>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;