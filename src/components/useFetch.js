import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data!!! Try Again sometime");
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setUsers(data);
          // console.log(data);
          setError(null);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, [url]);

  return { users, loading, error };
};

export default useFetch;
