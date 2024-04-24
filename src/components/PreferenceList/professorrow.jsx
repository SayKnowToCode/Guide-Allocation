// ProfessorRow.js
import React, { useEffect, useState } from 'react';
import './PreferenceList.css';
import './professorrow.css'
const ProfessorRow = ({ professor, isRequested, onRequestProf }) => {

    const acceptedGuide = JSON.parse(localStorage.getItem('teamData')).acceptedGuide;

    return (
        // <div className="professor-row">
        //     <div className="professor-details">
        //         <h1 className='professor-name'>{professor.name}</h1>
        //         <p className='prof-data'>{professor.email}</p>
        //         <p className='prof-data'>{professor.designation}</p>
        //         <p className='prof-data'>{professor.department}</p>
        //     </div>
        //     <div className="professor-domains">
        //         {professor.domains.map(domain => <p key={domain}>{domain}</p>)}
        //     </div>
        //     <div className="professor-action">

        //         
        //     </div>
        // </div>
        <div className="lg:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md mb-6 flex" style={{ width: "600px", padding: "4vh 4vh" }}>
                <div style={{ width: "60%" }}>
                    <h2 className="text-xl font-semibold mb-4 text-black whitespace-nowrap">{professor.name}</h2>
                    <div className="mb-2">
                        <p className="text-sm text-gray-500">-{professor.designation}</p>
                        <p className="text-sm text-gray-500">-{professor.department}</p>
                        <p className="text-sm text-gray-500">-{professor.email}</p>
                    </div>
                    <div className="">
                        {acceptedGuide.length !== 0
                            ? <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled>Already accepted</button>
                            : professor.count === 0
                                ? <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled>Slot Full</button>
                                : isRequested
                                    ? <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled>Requested</button>
                                    : <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => onRequestProf(professor.name)}>Request</button>
                        }
                    </div>
                </div>
                <div style={{ width: "40%", maxHeight: "100px", overflowY: "auto" }}>
                    <ul className="list-disc pl-5">
                        {professor.domains.map((domain, index) => (
                            <li key={index} className="text-sm text-gray-700 mb-1">{domain}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};


export default ProfessorRow;
