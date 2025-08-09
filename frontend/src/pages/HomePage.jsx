import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/shorten', { longUrl });
    setShortUrl(res.data.shortUrl);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
      )}
    </div>
  );
}

export default App;