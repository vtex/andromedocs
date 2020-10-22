import React from "react";

import Header from "../header";
import Footer from "../footer";
import { Box, Flex, Text} from "theme-ui";

const Layout = ({ children, title }) => (
  <Flex sx={{ flexDirection: "column", minHeight: '100vh' }}>
    <Header />
    <Text as="h1">{title}</Text>
    <Box as="main" sx={{flex: '1 1 0%'}}> {children}</Box>
    <Footer />
  </Flex>
)

export default Layout
