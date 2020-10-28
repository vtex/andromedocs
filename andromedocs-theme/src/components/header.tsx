import React from "react";
import { Flex } from "theme-ui";
import Logo from "./logo";

const Header = () => (
  <>
    <Flex
      sx={{
        height: "80px",
        backgroundColor: "muted.5",
        alignItems: "center",
        borderBottom: "solid",
        borderBottomColor: "muted.3",
        borderBottomWidth: 1,
        paddingLeft: 20,
      }}
    >
      <Logo />
    </Flex>
  </>
);

export default Header;
