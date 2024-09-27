import React, { useState } from 'react';
const BackendURL = import.meta.env.VITE_BACKEND_URL;
const HomePage = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BackendURL}/api/url/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      });
      const data = await response.json();
      setShortenedUrl(`${BackendURL}/api/url/${data.shortid}`); // Assuming the backend sends a shortUrl field
      // console.log(data);
      
    } catch (error) {
      console.error('Error submitting URL:', error);
    }
    console.log();
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <div className="bg-gray-900 text-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-500">URL Shortener</h1>
        <p className="mb-6 text-lg">Transform your long URLs into short, easy-to-share links!</p>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center space-x-3">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your URL here"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border-none focus:ring-4 focus:ring-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
            >
              Shorten
            </button>
          </div>
        </form>

        {shortenedUrl && (
          <div className="mt-6">
            <p className="text-lg">Your shortened URL:</p>
            <a href={shortenedUrl} className="text-blue-400 hover:underline">
              {shortenedUrl}
            </a>
          </div>
        )}
      </div>

      {/* Developer Info Bar */}
      <div className="mt-16 bg-gray-800 w-full p-4 text-center">
        <p className="text-lg text-gray-400">
          Developed by <span className="font-bold text-white">Jai Singh</span> | Follow me on
          <a href="https://github.com/jaisinghrajput" className="text-blue-500 hover:underline ml-2">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
