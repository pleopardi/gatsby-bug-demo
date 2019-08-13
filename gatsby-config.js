module.exports = {
  siteMetadata: {
    author: "Cristina Antonini, Paolo Leopardi",
    description: "Il blog per turisti curiosi",
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
        trackingId: "UA-145064596-1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#ffffff",
        display: "minimal-ui",
        icon: "content/assets/icon.svg",
        name: "Viaticum Blog",
        short_name: "Viaticum Blog",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "intl",
        path: `${__dirname}/content/intl`,
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
