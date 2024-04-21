// ProfessorRow.js
import React from 'react';

const ProfessorRow = ({ professor, isRequested, onRequestProf }) => {
    return (
        <div className="professor-row">
            <div className="professor-details">
                <h1 className='professor-name'>{professor.name}</h1>
                <p className='prof-data'>{professor.email}</p>
                <p className='prof-data'>{professor.designation}</p>
                <p className='prof-data'>{professor.department}</p>
            </div>
            {/* <div className="professor-department">
                <p>{professor.department}</p>
            </div> */}
            <div className="professor-domains">
                {professor.domains.map(domain => <p key={domain}>{domain}</p>)}
            </div>
            <div className="professor-action">
                {isRequested ? (
                    <button className="button button-disabled" disabled>Requested</button>
                ) : (
                    <button className="button" onClick={() => onRequestProf(professor.name)}>Request</button>
                )}
            </div>
        </div>
    );
};

export default ProfessorRow;
