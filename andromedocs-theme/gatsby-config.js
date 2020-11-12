module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`, `**/public/**/*`, `**/node_modules/`],
        path: `./`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-theme-ui",
  ],
};
