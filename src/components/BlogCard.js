import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

function BlogCard({ id, title, body }) {
    return (
        <Link to={"/blog/" + id}>
            <Card className='mb-4 full m-2 hover:bg-[#6366f124]' title={title}>
                <p className="m-0 truncate">
                    {body}
                </p>
            </Card>
        </Link>
    );
}

export default BlogCard;