import React from 'react';
// import { Link } from 'gatsby';

import '../components/layout.css';
import '../components/modernism/modernism.css';

import SEO from '../components/seo';

import Welcome from '../components/welcome';
import FAQ from '../components/modernism/faq/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';

import { TopBackgroundArt, BottomBackgroundArt } from '../components/modernism/background';
import HeaderInfo from '../components/modernism/headerInfo';

const IndexPage = () => (
	<div>
		<SEO title="" />
		{
			// insert VH logo
		}

		<TopBackgroundArt />
		<BottomBackgroundArt />

		<HeaderInfo />

		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</div>
);

export default IndexPage;
