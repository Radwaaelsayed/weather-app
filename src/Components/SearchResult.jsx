/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CircularProgress,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const SearchResult = ({ data, loading }) => {
  if (loading) return <CircularProgress isIndeterminate />;
  return (
    <Card color="black">
      <CardBody gap={3} display="flex" flexDirection="column">
        <VStack>
          <Heading size="md" as="h4">
            {data?.name}
          </Heading>
          <Text>temprture : {data?.main?.temp}</Text>
          <Text>humidity :{data?.main?.humidity}</Text>
        </VStack>
        <VStack>
          <Heading as="h6" size="md">
            weather
          </Heading>
          {data?.weather?.map((val, index) => {
            return (
              <HStack key={index}>
                <img
                  src={`https://openweathermap.org/img/wn/${val.icon}@2x.png`}
                />
                <Text>{val?.description}</Text>;
              </HStack>
            );
          })}
        </VStack>
        <VStack>
          <Heading as="h6" size="md">
            Wind
          </Heading>
          <Text>degree : {data?.wind?.deg}</Text>
          <Text>gust : {data?.wind?.gust}</Text>
          <Text>speed :{data?.wind?.speed}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default SearchResult;
