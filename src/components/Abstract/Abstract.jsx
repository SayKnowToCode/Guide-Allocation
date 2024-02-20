import React from 'react';
import './Abstract.css';
import { IoIosStarOutline } from "react-icons/io";
const ProjectAbstract = ({ abstract, projectId }) => {
    const truncatedAbstract = abstract?.split('\n').slice(0, 3).join('\n');
    const handleReadMoreClick = () => {
        console.log(`Redirecting to abstract tab for project ${projectId}`);
    };

    return (
        <div className='ml-20 Abstract-Container'>
            <div className='cont-1 flex whitespace-nowrap'>
                <h3 className='text-white abstract pt-4'>Abstract:</h3>
                <h1 className='text-white title pl-7 pt-0'>Brief Abstract</h1>
            </div>
            {abstract ? (
                <div>
                    <p className='text-white AbsPara'>{truncatedAbstract}</p>
                    <a href="#" className='text-white AbsPara' onClick={handleReadMoreClick}>Read More</a>
                </div>
            ) : (
                <p className='text-white AbsPara'>Please Fill The Abstract Form <a href="#">here</a></p>
            )}

        </div>
    );
};

export default ProjectAbstract;
