import React from "react";

import Header from "../header";
import Sidebar from "../sidebar";
import Footer from "../footer";
import { Box, Flex, Text } from "theme-ui";

const Layout = ({ children, title }) => (
  <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <Flex>
      <Sidebar />
      <Flex sx={{ minHeight: "calc(100vh - 80px)", flexDirection: "column", flex: "0 0 85%" }}>
        <Flex
          as="main"
          sx={{
            flex: "1 1 0%",
            flexDirection: "column",
            paddingLeft: 4,
          }}
        >
          <Text as="h1">{title}</Text>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  </Flex>
);

export default Layout;
