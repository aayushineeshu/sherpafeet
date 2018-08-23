import React, { Component } from "react";
import Layout from "../components/Layout";
import Space from "styled-space";

import {
  Box,
  Link,
  Image,
  Heading,
  Container,
  Column,
  Row,
  Text
} from "rebass";

export default () => {
  return (
    <div>
      <Layout>
        <Box
          style={{ margin: "5rem auto", maxWidth: 1500 }}
          p={4}
          mx={3}
          my={3}
          color="black"
          bg="white"
        >
          <Text fontSize={18} p={4} m={4} mt={0} pt={0} fontFamily={'"Helvetica Neue",Helvetica,Arial,sans-serif'} color="#333">
            <Text mb={3} >
              sherpafeet stands for empowerment of individuals and local
              communities. We feel, the only sustainable way to conserve nature
              is when people see their livelihoods linked to it. sherpafeet
              stands to make this connection between you, the guides and your
              mountains stronger.
            </Text>
            <Text mb={3}>
              sherpafeet provides local guides a platform which enables them to
              build their profile over time. shepafeet strives to build and take
              forward the trust between guides and customers.
            </Text>
            <Text mb={3}>
              We do not charge any <strong>fee</strong> from the guides or the
              trekkers for this service. Plus trekkers could review the guide on
              a transparent platform after their trek, an incentive for the
              guide to provide his <strong>best service</strong> to you!
            </Text>
            <Text mb={3}>
              sherpafeet also provides limited number of{" "}
              <strong>scholarships</strong> to individual talented local guides
              to pursue mountaineering courses in recognised government
              institutes. As a company we also encourage{" "}
              <strong>women guides</strong>. To get listed as a guide on
              sherpafeet, we check for at least one year of experience in
              guiding trekkers. We require local guides to submit proof of their
              guiding experience along with customer references for each trek.
            </Text>
          </Text>

          <Container pr={3} pl={3}>
            <Row>
              <Column>
                <Image
                  src="https://sherpafeet.com/assets/57f80496.png"
                  width={600}
                  height={200}
                  mb={0}
                />
                <Image
                  src="https://sherpafeet.com/assets/0e23c256.png"
                  width={600}
                  height={200}
                  mb={0}
                />
                <Image
                  src="https://sherpafeet.com/assets/4dd56ec1.png"
                  width={600}
                  height={200}
                />
              </Column>

              <Column>
                <Heading
                  mb={15}
                  textAlign="center"
                  fontFamily={'"PT Serif",serif'}
                  color="#333"
                  fontWeight={400}
                  fontSize={6}
                  children="About sherpafeet"
                />

                <Text
                  fontSize={18}
                  textAlign="center"
                  fontFamily={'"Helvetica Neue",Helvetica,Arial,sans-serif'}
                  color="#333"
                >
                  We connect you to trekking and mountaineering guides. Trekking
                  directly with a local guide will give you a feel of the local
                  culture. Local guides are necessary to make your trek safe.
                  Local guides are experts who know a little more about the ways
                  of the mountains.
                </Text>
              </Column>
            </Row>
          </Container>
        </Box>
      </Layout>
    </div>
  );
};
