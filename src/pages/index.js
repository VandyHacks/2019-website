import React from 'react';
// import { Link } from 'gatsby';
// try build again before i push it
import styled from 'styled-components';

import BigLogoWithGridAnimated from '../components/bigLogo';
import WelcomeAnimated from '../components/welcome';
import FAQAnimated from '../components/faq/faq';
import ScheduleAnimated from '../components/schedule';
import SponsorBoxAnimated from '../components/sponsorBox';

import '../../node_modules/animate.css/animate.min.css';
import '../css/layout.css';

const Container = styled.div`
	width: 76%;
	text-align: center;
	margin: 10em auto;
`;

const IndexPage = () => (
	<Container>
		<BigLogoWithGridAnimated />
		<WelcomeAnimated />
		<FAQAnimated />
		<ScheduleAnimated />
		<SponsorBoxAnimated />
	</Container>
);

export default IndexPage;
