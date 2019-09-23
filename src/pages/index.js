import React, { useState, useCallback, useEffect } from 'react';
// import { Link } from 'gatsby';
// try build again before i push it
import styled from 'styled-components';

import BigLogoWithGridAnimated from '../components/bigLogo';
import WelcomeAnimated from '../components/welcome';
import FAQAnimated from '../components/faq/faq';
import ScheduleAnimated from '../components/schedule';
import SponsorBoxAnimated from '../components/sponsorBox';
import isMobileContext from '../components/isMobileContext';

import '../../node_modules/animate.css/animate.min.css';
import '../css/layout.css';

const Container = styled.div`
	width: 76%;
	text-align: center;
	margin: 10em auto;
`;

const IndexPage = () => {
	const [isMobile, setIsMobile] = useState(undefined);

	const handleWindowResize = useCallback(() => {
		setIsMobile(window.innerWidth < 768);
	}, [setIsMobile]);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		// First resize
		const timeout = setInterval(() => {
			handleWindowResize();
		}, 250);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [handleWindowResize]);

	return (
		<Container>
			{isMobile === undefined ? null : (
				<isMobileContext.Provider value={isMobile}>
					<BigLogoWithGridAnimated />
					<WelcomeAnimated />
					<FAQAnimated />
					<ScheduleAnimated />
					<SponsorBoxAnimated />
				</isMobileContext.Provider>
			)}
		</Container>
	);
};

export default IndexPage;
