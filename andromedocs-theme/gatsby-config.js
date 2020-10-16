module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/documentation/`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-theme-ui",
  ],
};
