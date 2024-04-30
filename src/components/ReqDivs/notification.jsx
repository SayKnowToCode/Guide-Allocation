import React from 'react';
// import './requests.css';
import { IoIosNotifications } from "react-icons/io";
const NotificationBox = ({ notifications }) => {
    return (
        <div className="notification-container max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex items-center justify-center text-black border-b-2">
                <span className="material-icons-outlined text-2xl"><IoIosNotifications /></span>
                <h2 className="ml-2 font-semibold text-lg">Notification</h2>
            </div>
            <div>
                {/* {notifications.length === 0 ? (
                    <div className="p-4 text-gray-500 text-center">No notifications</div>
                ) : (
                    <ul className="list-disc list-inside p-4 space-y-2">
                        {notifications.map((notification, index) => (
                            <li key={index}>{notification}</li>
                        ))}
                    </ul>
                )} */}
                <div className='text-wrap flex m-3 overflow-y-scroll max-h-72'>
                    <div className="p-4 text-gray-500  text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione, iste blanditiis enim quod ducimus incidunt eaque iure animi necessitatibus repellendus amet sint suscipit earum, cum nobis? Nemo, deserunt id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus iusto excepturi, minima nulla repellat doloribus illo temporibus eveniet quibusdam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nisi nihil possimus omnis autem error eligendi repellat voluptatibus perspiciatis aut facere, voluptatem officia hic dicta vitae iste quisquam. Recusandae, provident?</div>
                </div>
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
