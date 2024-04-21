// ProfessorRow.js
import React, { useEffect, useState } from 'react';
import './PreferenceList.css';

const ProfessorRow = ({ professor, isRequested, onRequestProf }) => {

    const acceptedGuide = JSON.parse(localStorage.getItem('teamData')).acceptedGuide;

    return (
        <div className="professor-row">
            <div className="professor-details">
                <h1 className='professor-name'>{professor.name}</h1>
                <p className='prof-data'>{professor.email}</p>
                <p className='prof-data'>{professor.designation}</p>
                <p className='prof-data'>{professor.department}</p>
            </div>
            <div className="professor-domains">
                {professor.domains.map(domain => <p key={domain}>{domain}</p>)}
            </div>
            <div className="professor-action">

                {acceptedGuide.length !== 0
                    ? <button className="button button-disabled" disabled>Already accepted</button>
                    : professor.count === 0
                        ? <button className="button button-disabled" disabled>Slot Full</button>
                        : isRequested
                            ? <button className="button button-disabled" disabled>Requested</button>
                            : <button className="button" onClick={() => onRequestProf(professor.name)}>Request</button>
                }
                {acceptedGuide}
                {acceptedGuide.length}
            </div>
        </div>
    );
};

export default ProfessorRow;
