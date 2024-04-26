import React from 'react';
import './requests.css';
import { IoIosNotifications } from "react-icons/io";
const NotificationBox = ({ notifications }) => {
    return (
        <div className="notification-container max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-500 p-4 flex items-center justify-center text-white">
                <span className="material-icons-outlined text-2xl"><IoIosNotifications/></span>
                <h2 className="ml-2 font-semibold text-lg">Notification</h2>
            </div>
            <div className="overflow-y-scroll max-h-72">
                {/* {notifications.length === 0 ? (
                    <div className="p-4 text-gray-500 text-center">No notifications</div>
                ) : (
                    <ul className="list-disc list-inside p-4 space-y-2">
                        {notifications.map((notification, index) => (
                            <li key={index}>{notification}</li>
                        ))}
                    </ul>
                )} */}
                <div className="p-4 text-gray-500 text-center">No notifications</div>
            </div>
            <div className="bg-zinc-100 p-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center">
                    More info
                </button>
            </div>
        </div>
    );
};

export default NotificationBox;
