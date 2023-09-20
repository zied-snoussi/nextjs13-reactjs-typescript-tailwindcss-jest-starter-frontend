import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <ul className="list-disc list-inside text-gray-600">
          <li>Service 1: Description of Service 1.</li>
          <li>Service 2: Description of Service 2.</li>
          <li>Service 3: Description of Service 3.</li>
          <li>Service 4: Description of Service 4.</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
