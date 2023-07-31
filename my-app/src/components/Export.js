import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const exportData = async () => {
  try {
    const response = await axios.get('http://10.168.133.11:8000/user/');
    const users = response.data;

    // Convert the data to the desired format (e.g., CSV or JSON)
    const csvData = users.map(user => {
      return [
        user.participant,
        user.address1,
        user.address2,
        user.tel,
        user.mob,
        user.mail,
        user.exhibition,
        user.contact_person,
        user.price,
        user.payed,
        user.status,
        user.employer,
        user.date,
        user.logo,
        user.file,
      ].join(',');
    }).join('\n');

    // Create a Blob from the data and save it as a file
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'users.csv');
  } catch (error) {
    console.error(error);
  }
};

const Export = () => {
  // ...

  return (
    <div className="container">
      <button onClick={exportData}>Export</button>
    </div>
  );
};

export default Export;