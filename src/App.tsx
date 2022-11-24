import React from 'react'
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {Router} from "./router/Router"

import theme from "./theme/theme";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
