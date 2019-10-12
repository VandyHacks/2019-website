/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	);

	const {
		title = 'VandyHacks VI',
		description = 'VandyHacks VI: Art Edition will be held on November 1st–3rd.' +
			' Applications are now open! Are you ready to code a masterpiece?',
		author = 'The VandyHacks Team',
		lang = 'en',
	} = site.siteMetadata;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`${title}`}
			meta={[
				{ name: `description`, content: description },
				{ property: `og:title`, content: title },
				{ property: `og:description`, content: description },
				{ property: `og:type`, content: `website` },
				{ name: `twitter:card`, content: `summary` },
				{ name: `twitter:creator`, content: author },
				{ name: `twitter:title`, content: title },
				{ name: `twitter:description`, content: description },
				{ name: 'author', content: author },
			]}
		/>
	);
}

export default SEO;
