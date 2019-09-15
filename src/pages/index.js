import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';

import Welcome from '../components/welcome';
import FAQ from '../components/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';

import BigLogo from '../images/bigLogo.svg';
import Grid from '../images/gridLogo.svg';

const Container = styled.div`
	width: 77%;
	text-align: center;
	margin: 10em auto;
`;

const LogoStyle = styled.div`
	position: absolute;
	top: 7em;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.7;
`;

const LogoText = styled.div`
	fill: black;
	fill-opacity: 1;
`;

const IndexPage = () => (
	<Container>
		<LogoText>
			<BigLogo style={{ fill: 'black' }} />
		</LogoText>
		<LogoStyle>
			<Grid />
		</LogoStyle>

		<SEO title="" />
		{
			// insert VH logo
		}
		<Container>
			<h1>VandyHacks VI</h1>
			<h3>Nov 1-3, 2019 • Nashville, TN </h3>
		</Container>
		<Welcome></Welcome>

		<FAQ></FAQ>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</Container>
);

export default IndexPage;
