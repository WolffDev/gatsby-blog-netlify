import React, { Component } from 'react';


export default class PostPage extends Component {
	render() {
		const { data } = this.props;
		if (!data) return null;
		return (
			<div>
				<h4>{data.contentfulBlogPost.date}</h4>
				<h1>{data.contentfulBlogPost.title}</h1>
				<p
					dangerouslySetInnerHTML={{
						__html: data.contentfulBlogPost.body.childMarkdownRemark.html
					}}
				/>
			</div>
		)
	}
};

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		contentfulBlogPost(slug: {eq: $slug}) {
			id
			title
			body {
				childMarkdownRemark {
					html
					excerpt
				}
			}
			slug
		}
	}
`;