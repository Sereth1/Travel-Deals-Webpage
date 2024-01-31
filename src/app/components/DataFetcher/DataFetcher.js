import { useState, useEffect } from "react";

const DataFetcherComponent = ({
  data,
  setData,
  isLoading,
  setIsLoading,
  error,
  setError,
}) => {
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3002/data/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(Array.isArray(jsonData) ? jsonData : [jsonData]);
        setIsLoading(false);
      })
      .catch((fetchError) => {
        console.error("Error fetching data:", fetchError);
        setError(fetchError);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-1000 h-900 flex items-center justify-center shadow-lg rounded-lg">
          <p className="text-3xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-1000 h-800 flex items-center justify-center border-red-500 shadow-lg rounded-lg">
          <p className="text-lg font-semibold text-red-500">
            Error: {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2></h2>
      <pre></pre>
    </div>
  );
};

export default DataFetcherComponent;
