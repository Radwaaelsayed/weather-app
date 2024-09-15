import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
