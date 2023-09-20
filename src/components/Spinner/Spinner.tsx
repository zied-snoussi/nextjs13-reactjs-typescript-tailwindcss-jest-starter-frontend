import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-transparent">
            <div className="w-16 h-16 border-t-4 border-blue-600 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
