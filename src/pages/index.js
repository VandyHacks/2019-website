import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components';
=======
import '../components/layout.css';

import SEO from '../components/seo';
>>>>>>> 6457a0d1f7b7a91288b3424a208cb06c45ef3e90

import Welcome from '../components/welcome';
import FAQ from '../components/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';

import BigLogo from '../images/bigLogo.svg';
import Grid from '../images/gridLogo.svg';
import LocationDateText from '../images/LocationDateText.svg';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Cabin&display=swap');
    font-family: 'Notable', sans-serif;
  }`;

const Container = styled.div`
	width: 66%;
	text-align: center;
	margin: 10em auto;
`;

const LogoStyle = styled.div`
	position: absolute;
	top: 15em;
	left: 19em;
	width: 60%;
	height: 100%;
	opacity: 0.7;
`;

// TODO white fill and animation later!
const LogoText = styled.div`
	display: inline-block;
	width: 70%;
	align-content: center;
	fill: black;
	fill-opacity: 1;
	opcaity: 0;
`;

const LocationDateTextStyle = styled.div`
	width: 70%;
	margin: 1em auto;
`;

const IndexPage = () => (
	<Container>
		<GlobalStyles />
			<LogoText>
				<BigLogo/>

				<LocationDateTextStyle>
				<LocationDateText />
			</LocationDateTextStyle>
			</LogoText>

			<LogoStyle>
				<Grid />
			</LogoStyle>

			

			<Welcome></Welcome>

			<FAQ></FAQ>

			<Schedule></Schedule>

			<SponsorBox></SponsorBox>
	</Container>
);

export default IndexPage;
