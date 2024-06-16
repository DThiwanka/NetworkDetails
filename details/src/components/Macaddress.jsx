import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Macaddress() {

    const [mac, setMac] = useState('');

    useEffect(() => {
        const fetchMac = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/get-mac');
            setMac(response.data.macAddress);
            console.log(response)
          } catch (error) {
            console.error('Error fetching the MAC address:', error);
          }
        };
    
        fetchMac();
      }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center text-6xl">
       <h1>Your MAC Address is: {mac}</h1>
       </div>
    </div>
  )
}

export default Macaddress