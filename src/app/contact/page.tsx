import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600">
          If you have any questions or inquiries, feel free to get in touch with
          us using the contact information below.
        </p>
        <div className="text-gray-600">
          <p>Email: example@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 1234 Elm Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
