import { useEffect, useState } from "react";

const useFetch = (baseUrl, queryParams = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Object.keys(queryParams).length === 0) return;

    const buildUrlWithParams = (url, params) => {
      const queryString = new URLSearchParams(params).toString();
      return queryString ? `${url}?${queryString}` : url;
    };

    const fetchData = async () => {
      const urlWithParams = buildUrlWithParams(baseUrl, queryParams);
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(urlWithParams);
        const result = await response.json();
        if (result?.message) {
          setError(result);
          setData(null);
        } else {
          setError(null);
          setData(result);
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, JSON.stringify(queryParams)]); // Stringify queryParams for comparison

  return { data, loading, error };
};

export default useFetch;
