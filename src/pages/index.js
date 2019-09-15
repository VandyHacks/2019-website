import React from 'react';
// import { Link } from 'gatsby';

import '../components/layout.css';

import SEO from '../components/seo';

import Welcome from '../components/welcome';
import FAQ from '../components/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';

const IndexPage = () => (
	<div>
		<SEO title="" />
		{
			// insert VH logo
		}
		<h1>VandyHacks VI</h1>
		<h3>Nov 1-3, 2019 • Nashville, TN </h3>

		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</div>
);

export default IndexPage;
