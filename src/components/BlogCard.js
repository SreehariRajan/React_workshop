import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

function BlogCard({ id, title, body, author }) {
    return (
        <Link to={"/blog/" + id}>
            <Card className='mb-4 full m-2 hover:bg-[#6366f124] relative' footer={<p className='text-gray-500 w-full text-right'><p className='pi pi-pencil mr-2'></p>{author}</p>} title={title}>
                <p className="m-0 truncate">
                    {body}
                </p>

            </Card>
        </Link>
    );
}

export default BlogCard;