module.exports = {
	siteMetadata: {
		title: process.env.STATUS == null ? `VandyHacks VI` : `${process.env.STATUS} VandyHacks VI`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `The VandyHacks Team`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `VandyHacks VI: Nashville's Premier Hackathon`,
				short_name: `VandyHacks VI`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/vhlogo.png`, // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
	],
};
