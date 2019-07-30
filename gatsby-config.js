module.exports = {
  siteMetadata: {
    author: "Paolo Leopardi",
    description: "An amazing blog for tourists",
    social: {
      twitter: "PaoloLeopardi",
    },
    title: "Viaticum Blog",
  },
  plugins: [
    "gatsby-plugin-emotion",
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
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#ffffff",
        display: "minimal-ui",
        icon: "content/assets/icon.svg",
        name: "Viaticum Blog",
        short_name: "Viaticum",
        start_url: "/",
        theme_color: "#71151a",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "500", "600"],
            },
          ],
        },
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },
  ],
};
