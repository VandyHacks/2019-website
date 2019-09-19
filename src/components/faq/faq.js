import React from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import FAQTitle from '../../images/faqText.svg';
import FAQUpperBar from '../../images/faqUpperBar.svg';
import FAQLowerBar from '../../images/faqLowerBar.svg';

import Column from './column';
import useWindowWidth from '../utils/useWindowWidth';

const Container = styled.div`
	width: 100%;
`;

const FAQLogoStyle = styled.div`
	width: 30%;
	position: relative;
	left: 75%;
`;

const FAQUpperBarStyle = styled.div`
	width: 55%;
	top: 3em;
	position: absolute;
	z-index: -100;
`;

const FAQLowerBarStyle = styled.div`
	width: 55%;
	top: 95%;
	left: 50%;
	position: absolute;
	z-index: -100;
`;

const TextBody = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 32px;
	margin-left: 3em;
	mragin-right: 3em;
`;

const FAQText = [
	{
		question: 'What is a hackathon?',
		answer:
			'Hackathons are events where students from across the country come together for a weekend of innovation and creativity. Participants have 36 hours to create anything that shows off their creativity and passion for development. You may choose any platform, programming language, or format to show your stuff. You can even present a storyboard or idea; there’s no end to the possibilities!',
	},
	{
		question: 'I have no idea how to code. Can I still attend?',
		answer:
			"Even more reason for you to come! We will be hosting beginners' workshops for you to get started, and our mentors can help you out along the way. We greatly encourage new hackers to attend, and no prior experience is necessary!",
	},
	{
		question: "What if I've never been to a hackathon?",
		answer:
			'Not to worry! A few weeks before the event, you’ll receive an email with a link to our hacker guide, which will contain all the information you need to make the most out of your weekend. During the event, the VandyHacks Team will be around to help answer any questions. As always, feel free to email us at',
	},
	{
		question: 'What should I bring?',
		answer:
			'Be sure to bring your photo ID, laptop, phone, chargers, a change of clothes, toiletries, and any other devices you want to use. A government-issued ID is required to rent any hardware.',
	},
	{
		question: 'Where will I sleep?',
		answer: 'We will have designated quiet rooms, so bring a blanket and pillow!',
	},
	{
		question: 'What will I eat?',
		answer:
			'Meals will be provided throughout the event, starting with Friday dinner and ending with lunch on Sunday. Snacks will also be provided periodically. Vegetarian and gluten-free options are available. Please indicate any allergies or dietary restrictions on your application.',
	},
	{
		question: 'How are teams formed? Do I need a team?',
		answer:
			"Teams are limited to four people. If you're applying with a team, we will review all of your team members' applications to determine admission. We will also have a pitch session where attendees can share their ideas and find potential teammates. However, teams are not required, so feel free to work individually.",
	},
	{
		question: 'Will there be other activities besides hacking?',
		answer:
			"Of course! This year, we've planned a bunch of fun events for attendees to relax. Stay tuned for more info!",
	},
	{
		question: 'Do I need to stay the entire time?',
		answer:
			'Vanderbilt students are free to enter and leave the venue at all times. Students from other schools are asked to remain inside the venue throughout the entire event.',
	},
	{
		question: 'What if I’m interested in being a mentor?',
		answer: 'Send us an email at: ',
	},
	{
		question: 'Who can apply?',
		answer:
			'Anyone who is 18 years or older (we will be checking ID) and is currently enrolled in college or university with a valid student ID. International students are invited to apply and attend, but we cannot guarantee full travel reimbursement.',
	},
	{
		question: 'How does registration work?',
		answer:
			"Applications are now open! Acceptance is determined by a variety of factors, and applications will be reviewed by our board on a rolling basis. Once you’re accepted, you’ll receive an email from the VandyHacks team. If you're curious, email us for more info at",
	},
	{
		question: "What if I'm a Vanderbilt student?",
		answer: 'All Vanderbilt students are encouraged to attend, regardless of major or background.',
	},
	{
		question: 'Are walk-ins allowed?',
		answer:
			'We ask that everyone complete an application, but walk-ins will be accepted if space allows. We cannot guarantee swag for walk-ins.',
	},
	{
		question: 'How do I get there?',
		answer:
			"Cars, buses, or flights, depending on location! We'll be sending buses to specific schools with large numbers of applicants.",
	},
	{
		question: 'Will travel reimbursements be provided?',
		answer:
			'Travel reimbursements outside of the bus routes are tentative and will be awarded on a rolling basis.',
	},
	{
		question: "How do I get there if I'm not near a bus stop?",
		answer:
			'We will be providing gas reimbursements for cars with 3+ hackers in them. Additionally, we may partially subsidize Greyhound and plane tickets. Contact us at',
	},
	{
		question: 'Will there be parking available for attendees?',
		answer:
			'Yes! Attendees will be able to find parking at the 25th Avenue Garage, conveniently located next to Vanderbilt’s Engineering and Science Building. You can find it',
	},
	{
		question: 'I have more questions!',
		answer: "Send us an email at info@vandyhacks.org! We'll be happy to answer!",
	},
];

const left = FAQText.filter((question, i) => !(i % 2));
const right = FAQText.filter((question, i) => i % 2);
// 19 in total

const FAQ = () => {
	const isMobile = useWindowWidth() <= 768;
	return (
		<Container>
			<FAQLogoStyle>
				<FAQTitle />
			</FAQLogoStyle>

			<FAQUpperBarStyle>
				<FAQUpperBar />
			</FAQUpperBarStyle>

			<TextBody>
				{isMobile ? (
					<Column questions={FAQText} />
				) : (
					<>
						<Column questions={left} />
						<Column questions={right} />
					</>
				)}
			</TextBody>

			<FAQLowerBarStyle>
				<FAQLowerBar />
			</FAQLowerBarStyle>
		</Container>
	);
};

const FAQAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInRight" // fadeInLeft, or fadeInRight
	>
		<FAQ />
	</InViewMonitor>
);

export default FAQAnimated;
