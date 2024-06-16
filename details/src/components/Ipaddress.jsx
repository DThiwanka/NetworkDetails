import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ipaddress = () => {
  const [ip, setIp] = useState('');

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
    <div className="flex justify-center items-center h-screen">
      <div className="text-center text-xl sm:text-6xl">
       <h1>Your IP Address is: <br/></h1>
       <center className='mt-10'> {ip}</center>
       </div>
    </div>
  );
};

export default Ipaddress;
