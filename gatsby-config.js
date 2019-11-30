module.exports = {
	plugins: [
		"@intergroupsite/gatsby-theme-intergroup-site",
		{
			resolve: "@intergroupsite/gatsby-theme-intergroup-site",
			options: {
				contentPath: "data",
				basePath: "/data",
			},
		},
	],
}