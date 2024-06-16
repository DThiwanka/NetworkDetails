import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeviceDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/get-location');
        setDetails(response.data);
      } catch (error) {
        setError('Error fetching the Device Details address:', error);
      }
      setLoading(false);
    };

    fetchDetails();
  }, []);

  return (
    <div>


      <div className="flex justify-center items-center h-screen">
        <div className="text-wrap text-sm text-center sm:text-2xl">
          <h2 className='text-center mb-10'>Device details</h2>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {details && (
            <div>
              <p>IP: {details.ip}</p>
              <p>Hostname: {details.hostname}</p>
              <p>City: {details.city}</p>
              <p>Region: {details.region}</p>
              <p>Country: {details.country}</p>
              <p>Location: {details.loc}</p>
              <p>Organization: {details.org}</p>
              <p>Postal Code: {details.postal}</p>
              <p>Timezone: {details.timezone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
