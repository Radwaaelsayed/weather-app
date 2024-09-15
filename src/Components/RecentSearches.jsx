/* eslint-disable react/prop-types */
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const RecentSearches = ({ setQueryParams }) => {
  const recentSearches = localStorage.getItem("cities")?.split(",");
  let uniqueArray = [...new Set(recentSearches)];

  return (
    <Stack alignSelf="start">
      <Heading as="h6" size="md">
        Recent Cities
      </Heading>
      {uniqueArray?.map((data, index) => {
        if (data != "null")
          return (
            <Box
              cursor="pointer"
              key={index}
              onClick={() => setQueryParams((prev) => ({ ...prev, q: data }))}
            >
              <Text>{data}</Text>
            </Box>
          );
      })}
    </Stack>
  );
};

export default RecentSearches;
