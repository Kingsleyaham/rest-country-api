import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const response = await axios.get(url, {
          signal: controller.Signal,
        });
        setIsPending(false);
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
