module.exports = {
    siteMetadata: {
        // Used for the site title and SEO
        title: `Kat Batuigas`,
        // Used to provide alt text for your avatar
        author: `Kat Batuigas`,
        // Used for SEO
        description: `Personal site`,
        // Used for resolving images in social cards
        siteUrl: `https://kbatuigas-workshop-101-site.netlify.app/`,
        // Used for social links in the root footer
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/alsokrista`,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured: true
            }
        }
    ]
}