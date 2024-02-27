import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
function App() {
  const theBoxCss = {
    border:'3px solid brown'

  }
  
    return (
      <ChakraProvider>
        <Container style={{ border: "2px solid red" }} maxWidth="4xl">

          <Navbar/>

          <div>
            <Heading>Sahil</Heading>
            <Text marginLeft="10rem" color="blue" fontWeight="bold">
              lorem
            </Text>
          </div>
          <Box background="orange" padding="10rem" as="section"  sx={theBoxCss} >
            <Text>
              This is  Box.
            </Text>
          </Box>

        </Container>
      </ChakraProvider>
    );
  }


export default App;
