import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Flex, Box, NavLink } from "theme-ui";

const Sidebar = () => {
  const { allSidebarYaml } = useStaticQuery(graphql`
    query {
      allSidebarYaml {
        edges {
          node {
            label
            link
            items {
              label
              link
            }
          }
        }
      }
    }
  `);

  return (
    <Flex
      as="nav"
      sx={{
        backgroundColor: "muted.4",
        flexDirection: "column",
        flex: "0 0 15%",
        padding: 4,
        "a:link": {
          textDecoration: "none",
        },
        a: {
          color: "inherit",
        },
      }}
    >
      {allSidebarYaml.edges.map(({ node: { label, link, items } }, index) => (
        <NavLink key={index}>
          <Box
            sx={{
              ":hover": {
                borderRadius: "5px",
                backgroundColor: "focus",
              },
              padding: 2,
            }}
          >
            <Link activeStyle={{ color: "#E31C58" }} to={link}>
              {label}
            </Link>
          </Box>
          {items && (
            <Flex
              as="ul"
              sx={{
                flexDirection: "column",
              }}
            >
              {items.map((subitem, index) => (
                <Box
                  key={index}
                  as="li"
                  sx={{
                    listStyle: "none",
                    ":hover": {
                      borderRadius: "5px",
                      backgroundColor: "focus",
                    },
                  }}
                >
                  <Link activeStyle={{ color: "#E31C58" }} to={subitem.link}>
                    {subitem.label}
                  </Link>
                </Box>
              ))}
            </Flex>
          )}
        </NavLink>
      ))}
    </Flex>
  );
};

export default Sidebar;
