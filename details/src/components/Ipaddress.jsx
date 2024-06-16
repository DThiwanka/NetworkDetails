import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ipaddress = () => {
  const [ip, setIp] = useState('');
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIp(response.data.ip);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIp();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
       <div className="text-center text-6xl">
      <h1>Your IP Address is: {ip}</h1>
      </div>
    </div>
  );
};

export default Ipaddress;
