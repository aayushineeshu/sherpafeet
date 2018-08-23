import React, { Component } from "react";
import Layout from "../components/Layout";
//import {FaMobile} from "react-icons/lib/fa/mobile";
import { Box, Heading, Text } from "rebass";

export default () => {
  return (
    <div>
      <Layout>
        <Box bg="white" px={3} py={3} alignSelf="center" mx={3} my={3}>
          <center>
            <Heading
              is="p"
              children="Our address is"
              fontFamily={'"PT Serif",serif'}
              mt={20}
              mb={10}
              fontSize={24}
              fontWeight={500}
              color="#333"
            />
            <Text>1st Stage, 4th Block</Text>
            <Text>HBR Layout, Bangalore - 560043</Text>
            <Text>Karnataka, India</Text>
            {/* <FaMobile /> */}
            <Text >9886106999</Text>
           
          </center>
        </Box>
      </Layout>
    </div>
  );
};
