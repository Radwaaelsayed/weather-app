import { Button, Center, Divider, Stack } from "@chakra-ui/react";
import { useState } from "react";
import RecentSearches from "../Components/RecentSearches";
import Search from "../Components/Search";
import SearchResult from "../Components/SearchResult";
import useFetch from "../Hooks/fetchdata";
import useGeolocation from "../Hooks/fetchLocation";

const Home = () => {
  const apiKey = "6e340eab04ea6cf71ceb177d27a2b046";
  const [city, setCity] = useState(null);
  const [params, setParams] = useState({
    appid: apiKey,
  });

  const [queryParams, setQueryParams] = useState({
    appid: apiKey,
  });

  const {
    data: cityData,
    loading,
    error,
  } = useFetch("https://api.openweathermap.org/data/2.5/weather", queryParams);

  const { data: latlogData } = useFetch(
    " https://api.openweathermap.org/data/2.5/weather",
    params
  );
  const { location } = useGeolocation();

  const handelCurrentWheater = () => {
    setParams((prev) => ({
      ...prev,
      lat: location?.latitude,
      lon: location.longitude,
    }));
    setQueryParams({
      appid: apiKey,
    });
    setCity(null);
  };
  return (
    <Stack
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-around"
      width="800px"
    >
      <RecentSearches setQueryParams={setQueryParams} setParams={setParams} />
      <Center height="200px">
        <Divider orientation={{ base: "horizontal", md: "vertical" }} />
      </Center>
      <Stack flexDirection="column">
        <Search
          setCity={setCity}
          city={city}
          setQueryParams={setQueryParams}
          setParams={setParams}
          error={error}
          apiKey={apiKey}
        />
        {(cityData || latlogData) && (
          <SearchResult data={cityData || latlogData} loading={loading} />
        )}
      </Stack>
      <Center height="200px">
        <Divider orientation={{ base: "horizontal", md: "vertical" }} />
      </Center>
      <Button onClick={handelCurrentWheater} style={{ alignSelf: "start" }}>
        Get Weather of your current location
      </Button>
    </Stack>
  );
};

export default Home;
