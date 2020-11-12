const { createFilePath } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeSidebar = `
    type Subitem {
      label: String!
      link: String!
    }
    type SidebarYaml implements Node {
      label: String!
      link: String
      items: [Subitem]
    }
  `

  createTypes(typeSidebar)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const slug = node.frontmatter.slug || createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: `${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/components/templates/docs.tsx`),
      context: { id: node.id, slug: node.fields.slug },
    });
  });
};
