/** @jsx jsx */

import Header from "../header";
import Sidebar from "../sidebar";
import Footer from "../footer";
import { jsx, Flex, Text } from "theme-ui";
import { ThemeProvider } from "../../../../components/src/theme";

const Layout = ({ children, title }) => (
  <ThemeProvider>
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Flex>
        <Sidebar />
        <Flex
          sx={{
            minHeight: "calc(100vh - 80px)",
            flexDirection: "column",
            flex: "0 0 85%",
          }}
        >
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
  </ThemeProvider>
);

export default Layout;
