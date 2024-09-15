/* eslint-disable react/prop-types */
import { Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Search = ({
  setCity,
  city,
  setQueryParams,
  error,
  setParams,
  apiKey,
}) => {
  const recentSearches = localStorage.getItem("cities");

  const handelSubmit = (e) => {
    e.preventDefault();
    setQueryParams((prev) => ({ ...prev, q: city }));
    localStorage.setItem("cities", recentSearches + "," + city);
    setParams({ appid: apiKey });
  };
  useEffect(() => {
    if (!city) {
      setQueryParams((prev) => ({ ...prev, q: null }));
    }
  }, [city]);

  return (
    <form onSubmit={handelSubmit} style={{ alignSelf: "start" }}>
      <Input
        value={city}
        placeholder="default placeholder"
        onChange={(e) => setCity(e.target.value)}
      />
      <Text>{error?.message}</Text>
    </form>
  );
};

export default Search;
