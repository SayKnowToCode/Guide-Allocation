import React from 'react';
import './Abstract.css';
const ProjectAbstract = ({ abstract }) => {

    const truncatedAbstract = abstract?.split('\n').slice(0, 3).join('\n');
    
    return (
        <div className='ml-20 Abstract-Container'>
            <div className='cont-1 flex whitespace-nowrap'>
                <h3 className='text-white abstract pt-4'>Abstract:</h3>
                <h1 className='text-white abstract-title pl-7 pt-0'>Brief Abstract</h1>
            </div>
            {abstract ? (
                <div>
                    <p className='text-white AbsPara'>{truncatedAbstract}</p>

                </div>
            ) : (
                <p className='text-white AbsPara'>Please Fill The Abstract Form here </p>
            )}

        </div>
    );
};

export default ProjectAbstract;
