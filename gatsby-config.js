module.exports = {
  siteMetadata: {
    author: "Paolo Leopardi",
    description: "An amazing blog for tourists",
    social: {
      twitter: `PaoloLeopardi`,
    },
    title: "Viaticum Blog",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: "ADD YOUR TRACKING ID HERE",
      },
    },
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          blog: require.resolve("./src/components/Layout.js"),
        },
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-images` }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Blog",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
  ],
};
