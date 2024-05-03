import React from 'react';
import './Events1.css';
import { IoIosNotifications } from "react-icons/io";
const Events = () => {
    const phase1StartDate = localStorage.getItem('phase1StartDate') || '';
    const phase1EndDate = localStorage.getItem('phase1EndDate') || '';
    const phase2StartDate = localStorage.getItem('phase2StartDate') || '';
    const phase2EndDate = localStorage.getItem('phase2EndDate') || '';
    const phase3StartDate = localStorage.getItem('phase3StartDate') || '';
    const phase3EndDate = localStorage.getItem('phase3EndDate') || '';
    const currentDate = new Date();
    return (
        <div className="notification-container overflow-hidden">
            <div className="p-4 flex items-center justify-center text-black border-b-2">
                <span className="material-icons-outlined text-2xl"><IoIosNotifications /></span>
                <h2 className="ml-2 font-semibold text-lg">Events</h2>
            </div>



            <div className='text-wrap flex-col m-3 overflow-y-scroll h-56'>
                {(phase1StartDate.length > 0 && currentDate >= new Date(phase1StartDate)) ?
                    <div className="p-4 text-gray-500 text-justify">
                        Phase 1 is Live from {new Date(phase1StartDate).toLocaleString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })} to {new Date(phase1EndDate).toLocaleString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })}
                    </div>
                    : ''}

                {(phase2StartDate.length > 0 && currentDate >= new Date(phase2StartDate)) ?
                    <div className="p-4 text-gray-500 text-justify">
                        Phase 2 is Live from {new Date(phase2StartDate).toLocaleString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })} to {new Date(phase2EndDate).toLocaleString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })}
                    </div>
                    : ''}

                {(phase3StartDate.length > 0 && currentDate >= new Date(phase3StartDate)) ?
                    <div className="p-4 text-gray-500 text-justify">
                        Phase 3 is Live from {new Date(phase3StartDate).toLocaleString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })} to {new Date(phase3EndDate).toLocaleString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })}
                    </div>
                    : ''}

            </div>




        </div >
    );
};

export default Events;
