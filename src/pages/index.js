import React from 'react';
import InViewMonitor from 'react-inview-monitor';

import '../components/layout.css';
import '../components/modernism/modernism.css';

import SEO from '../components/seo';

import SponsorBox from '../components/sponsorBox';

import { TopSection, BottomSection } from '../components/modernism/sections';

const IndexPage = () => (
	<>
		<a
			id="mlh-trust-badge"
			href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020_seaons&utm_content=blue"
			target="_blank"
			rel="noopener noreferrer"
			style={{
				display: 'block',
				maxWidth: '100px',
				minWidth: '60px',
				position: 'fixed',
				right: '50px',
				top: '0px',
				width: '10%',
				zIndex: '10000',
			}}
		>
			<img
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg"
				alt="Major League Hacking 2020 Hackathon Season"
				style={{ width: '100%' }}
			/>
		</a>

		<SEO title="VandyHacks 2019" />

		<TopSection />
		<BottomSection />

		<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInUp">
			<SponsorBox />
		</InViewMonitor>
	</>
);

export default IndexPage;
