// src/DeviceInfo.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Device = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/device');
        setDeviceInfo(response.data);
      } catch (err) {
        setError('Failed to fetch device information');
      }
    };

    fetchDeviceInfo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!deviceInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="text-wrap text-sm text-center sm:text-2xl">
      <h2 className='text-center mb-10'>Device Information</h2>
      <ul>
        <li>Browser: {deviceInfo.browser}</li>
        <li>Version: {deviceInfo.version}</li>
        <li>OS: {deviceInfo.os}</li>
        <li>Platform: {deviceInfo.platform}</li>
        <li>Is Mobile: {deviceInfo.isMobile ? 'Yes' : 'No'}</li>
        <li>Is Tablet: {deviceInfo.isTablet ? 'Yes' : 'No'}</li>
        <li>Is Desktop: {deviceInfo.isDesktop ? 'Yes' : 'No'}</li>
        <li>Is Bot: {deviceInfo.isBot ? 'Yes' : 'No'}</li>
        <li>Source: {deviceInfo.source}</li>
        <li>Device: {deviceInfo.device}</li>
        <li>Is Phone: {deviceInfo.isPhone ? 'Yes' : 'No'}</li>
      </ul>
    </div>
    </div>
    
  );
};

export default Device;



