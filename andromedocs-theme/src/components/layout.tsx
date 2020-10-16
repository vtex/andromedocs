import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Header from "./header";

const Layout = ({ data: { mdx } }) => (
  <>
    <Header />
    <h1>{mdx.frontmatter.title}</h1>
    <MDXProvider>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  </>
);

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
export default Layout;
