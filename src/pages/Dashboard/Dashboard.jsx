import { useState, useEffect } from "react";

function Dashboard() {
  const [ feedData, setFeedData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    async function loadFeeds() {
      try {
        const response = await fetch("/sample-feeds.json");

        if (!response.ok) {
          throw new Error("Failed to load feeds");
        }

        const data = await response.json();

        setFeedData(data);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };

    loadFeeds();
  }, []);

  if (loading) { return <p>Loading Frontpage...</p> };
  if (error) { return <p>{error}</p> };

  return (
    <>
      
    </>
  )
};

export default Dashboard;