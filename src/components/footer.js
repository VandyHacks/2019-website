import React from 'react';
import styled from 'styled-components';

import Facebook from '../images/facebook.svg';
import Github from '../images/github.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';

const StyledFooter = styled.div`
	background: #fff;
	color: rgb(48, 72, 161);
	height: 60px;
	overflow: none;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	p {
		margin: 0;
	}

	a {
		/* Makes the a tags the same height as their content */
		display: inline-flex;

		&:hover {
			cursor: pointer;
		}
	}

	/* Recolor the SVGs */
	path,
	rect,
	line {
		stroke: rgb(48, 72, 161);
	}

	@media screen and (max-width: 480px) {
		/* Column centered on the X-axis */
		flex-flow: column;
		align-items: center;

		/* Increase height and center on Y-axis */
		justify-content: center;
		height: 100px;

		p {
			/* Make text appear after icons on mobile only */
			order: 1;

			/* Add padding so icons don't touch the text */
			padding-top: 10px;
		}
	}
`;

const SocialIcons = styled.div`
	a:not(:first-of-type) {
		/* Adds left margin to every social icon except the first one */
		margin-left: 5px;
	}
	display: inline-flex;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>{'Made with <3 by the VandyHacks team'}</p>
			<SocialIcons>
				<a href="https://www.facebook.com/vandyhacks" rel="noopener noreferrer" target="_blank">
					<Facebook />
				</a>
				<a href="https://twitter.com/vandyhacks" rel="noopener noreferrer" target="_blank">
					<Twitter />
				</a>
				<a href="https://www.instagram.com/vandyhacks" rel="noopener noreferrer" target="_blank">
					<Instagram />
				</a>
				<a href="https://www.github.com/VandyHacks" rel="noopener noreferrer" target="_blank">
					<Github />
				</a>
			</SocialIcons>
		</StyledFooter>
	);
};

export default Footer;
