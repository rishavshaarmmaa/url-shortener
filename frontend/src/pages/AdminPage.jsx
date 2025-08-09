import { useEffect, useState } from "react";

function AdminPage() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/urls")
      .then((res) => res.json())
      .then((data) => {
        // If backend returns { urls: [...] } instead of [...], fix it
        if (Array.isArray(data)) {
          setUrls(data);
        } else if (Array.isArray(data.urls)) {
          setUrls(data.urls);
        } else {
          setUrls([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching URLs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin - All Shortened URLs</h1>
      {urls.length === 0 ? (
        <p>No URLs found</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url._id}>
                <td>{url.longUrl}</td>
                <td>
                  <a
                    href={`http://localhost:5000/${url.shortCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`http://localhost:5000/${url.shortCode}`}
                  </a>
                </td>
                <td>{url.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;

