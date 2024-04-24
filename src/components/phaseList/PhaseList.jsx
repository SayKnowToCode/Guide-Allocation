import React from 'react';
// No need to import PhaseList.css

const PhaseList = () => {
  return (
    <div className="lg:w-1/3 px-4">
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Professor Name</h2>

          <div className="mb-4">
            <img src="./image.png" alt="Report2021-22" className="w-full" />
          </div>

          <div className="mb-2">
            <p className="text-sm text-gray-500">-Designation</p>
            <p className="text-sm text-gray-500">-Department</p>
            <p className="text-sm text-gray-500">-email</p>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            Soft Computing
            Machine Learning
            Deep Learning
            User Experience Design
            Generative AI and Explainable AI
            Artificial Intelligence
          </p>

          <hr className="my-4" />

          <div className="text-center">
            <a href="" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600">Request</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseList;
