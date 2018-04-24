const path = require('path');

exports.onCreatePage = async ({ page, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		if (page.path.match(/^\/2nd-post/)) {
			// It's assumed that `landingPage.js` exists in the `/layouts/` directory
			page.layout = "2nd-page";

			// Update the page.
			createPage(page);
		}

		resolve();
	});
};

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allContentfulBlogPost(filter: {node_locale: {regex: "/en-US/"}}) {
					edges {
						node {
							slug
						}
					}
				}	
			}
		`).then(result => {
				result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
					createPage({
						path: node.slug,
						layout: 'index',
						component: path.resolve('./src/posts/PostPage.js'),
						context: {
							slug: node.slug
						}
					})
				});
				resolve();
			})
	})
}

