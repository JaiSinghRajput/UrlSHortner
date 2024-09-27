import React, { useState, useEffect } from 'react';
import { LinkIcon, ChartBarIcon } from '@heroicons/react/outline'; // Import icons

const BackendURL = import.meta.env.VITE_BACKEND_URL;

const History = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch(`${BackendURL}/getall`);
        const data = await response.json();
        setUrls(data.urls);
      } catch (error) {
        console.error('Error fetching URLs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <>
    <div className="mt-12 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Recent URLs</h2>
      <ul className="space-y-6">
        {urls.length > 0 ? (
          urls.map((url, index) => (
            <li
              key={index}
              className="flex justify-between items-start bg-gray-800 text-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <LinkIcon className="h-6 w-6 text-indigo-400 mr-2" />
                  <span className="truncate text-lg font-semibold">
                    {url.redirectURL}
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  Shortened:{" "}
                  <a
                    href={`${BackendURL}/api/url/${url.shortId}`}
                    className="text-indigo-400 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    {`${BackendURL}/api/url/${url.shortId}`}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ChartBarIcon className="h-6 w-6 text-green-400" />
                <span className="text-sm font-semibold text-gray-400">
                  Hits: {url.visitHistory ? url.visitHistory.length : 0}
                </span>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-400">No URLs found.</li>
        )}
      </ul>
    </div>
    <div className="mt-8 bg-white text-gray-900 rounded-lg shadow-lg p-6 text-center">
    <h3 className="text-2xl font-bold text-indigo-600">Total URLs Shortened</h3>
    <p className="text-4xl mt-4 font-extrabold text-gray-700">{urls.length}</p>
  </div>
  </>
  );
};

export default History;
