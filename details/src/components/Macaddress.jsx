import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Macaddress() {

    const [mac, setMac] = useState('');

    useEffect(() => {
        const fetchMac = async () => {
          try {
            const response = await axios.get('https://networkdetails.onrender.com/api/get-mac');
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
      <div className="text-center text-xl sm:text-6xl">
       <h1>Your MAC Address is: <br/></h1>
       <center className='mt-10'> {mac}</center>
       </div>
    </div>
  )
}

export default Macaddress
