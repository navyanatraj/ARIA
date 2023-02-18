/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// const strapiConfig = {
//   apiURL: "http://localhost:1337",
//   accessToken:
//     "49c7953a19b279ec4f52355df85dc8c76928a6ef9d7424050aafd7ba3ab44d0ca0277dea003eec5400f603746c96552c380d0ab4aedf35040a92685b4ac6c8bf7c7ba4165a3824cb9c31a3df5e0fdb47ab98445c43a8dd08d61aff29d9abf0c4900fb69e405d07adade7229cd72f249521ba7e609321139c1d6af3fa77670757",
//   collectionTypes: ["article", "company", "author", "ServicePortfolios"],
//   singleTypes: [],
//   remoteFileHeaders: {
//     /**
//      * Customized request headers
//      * For http request with a image or other files need authorization
//      * For expamle: Fetch a CDN file which has a security config when gatsby building needs
//      */
//     Referer: "https://your-site-domain/",
//     // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
//   },
// };

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i9uyl9m8lvdo`,
        accessToken: `TpRYDi4LOX-xFW2Mss7svPU_8I9KhJO-rxjs6P2LqE0`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
};
