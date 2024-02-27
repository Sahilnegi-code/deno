import React from 'react';
import { Box , Flex } from '@chakra-ui/react';
const Navbar = () => {
  return (
    <>
    <Flex background="orange"  border='2px solid black' justify="space-around" flexWrap="wrap" gap="5">

        <Box h="50px" w='150px' flexGrow="1" border='2px solid green' >
            1
        </Box>
        <Box h="50px" w='150px' flexGrow="2" border='2px solid green'>
            2
        </Box>
        <Box h="50px" w='150px' flexGrow="3" border='2px solid indigo' >
            3
        </Box>
        <Box h="50px" w='150px' flexGrow="4" border='2px solid indigo' >
            4
        </Box>

    </Flex> 
    </>
  );
}

export default Navbar;
