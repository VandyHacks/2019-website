import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';
import isMobileContext from './isMobileContext';

import ScheduleTitle from '../images/scheduleText.svg';
import Box from '../images/stationeryBox.svg';
import Box2 from '../images/stationeryBox2.svg';
import Pen from '../images/stationeryPen.svg';
import FriBar from '../images/schedule/friBar.svg';
import FriNoBar from '../images/schedule/friNoBar.svg';
import SatBar from '../images/schedule/satBar.svg';
import SatNoBar from '../images/schedule/satNoBar.svg';
import SunBar from '../images/schedule/sunBar.svg';
import SunNoBar from '../images/schedule/sunNoBar.svg';

// this data for this actually *should* come from the data layer
// fetching from vaken's schedule plugin support thing
// this is just filler data.

// gatsby has graphql support though which should make it easier

// we're going to have to do a lot of fancy css here to get the scrolling to look right.

const Container = styled.div`
	&:after {
		content: '';
		display: table;
		clear: both;
	}
	margin: 12em 0;
`;

const ContainerMobile = styled.div`
	&:after {
		content: '';
		display: table;
		clear: both;
	}
	margin: 6em 0;
`;

const ScheduleLogoStyle = styled.div`
	width: 35%;
	position: relative;
	top: 20em;
`;

const ScheduleLogoMobileStyle = styled.div`
	width: 90%;
	position: relative;
	left: 10%;
`;

const BoxStyle = styled.div`
	position: absolute;
	top: 2em;
	left: 6em;
	width: 13vh;
	opacity: 1;
`;

const Box2Style = styled.div`
	position: absolute;
	top: 2em;
	left: 16em;
	width: 13vh;
	opacity: 1;
`;

const PenStyle = styled.div`
	position: absolute;
	top: 6em;
	left: -4em;
	width: 14vh;
	opacity: 1;
`;

const BoxStyleMobile = styled.div`
	position: static;
	width: 20%;
	opacity: 1;
	float: right;
	margin-right: 3em;
	margin-top: -2em;
`;

const Box2StyleMobile = styled.div`
	position: static;
	width: 22%;
	opacity: 1;
	float: right;
	margin-top: -1em;
`;

const PenStyleMobile = styled.div`
	position: static;
	width: 25%;
	opacity: 1;
	float: left;
	margin-bottom: 2em;
	margin-left: 2em;
`;

const ScheduleBodyContainer = styled.div`
	float: right;
	width: 50%;
`;

const ScheduleBodyContainerMobile = styled.div`
	margin-top: 2em;
	margin-left: 1.3em;
	width: 100%;
`;

const ScheduleRightCol = styled(ScheduleBodyContainer)`
	width: 75%;
`;

const ScheduleBodyTopCol = styled(ScheduleBodyContainer)`
	width: 25%;
	float: left;
	top: 3em;
	position: relative;
`;

const ScheduleBodyTimeCol = styled(ScheduleRightCol)`
	width: 27%;
	float: left;
`;

const ScheduleBodyDescriptionCol = styled(ScheduleRightCol)`
	width: 72%;
	float: left;
`;

//	color: #3048a1;	font-weight: normal;
const DayText = styled.div`
	float: right;
	padding-right: 0;
	cursor: pointer;
	margin: 1em auto;
	width: 100%;
`;

const TimeText = styled.p`
	text-align: right;
`;

const EventText = styled.p`
	text-align: left;
	padding: 0 1.5em;
`;

const scheduleData = [
	{
		date: 'Nov1',
		day: 'Fri',
		schedule: [
			{ time: '5:30p', event: 'Check-in Begins' },
			{ time: '6:00p', event: 'Dinner' },
			{ time: '8:30p', event: 'Opening Ceremony' },
			{ time: '9:30p', event: 'Team Finding' },
			{ time: '9:30p', event: 'Mentor Search' },
			{ time: '9:30p', event: 'Pitch Session' },
			{ time: '10:00p', event: 'Hacking Begins' },
			{ time: '10:30p', event: 'Beginner Workshops (until 3am)' },
			{ time: '11:59p', event: 'Midnight Snack' },
		],
	},
	{
		date: 'Nov2',
		day: 'Sat',
		schedule: [
			{ time: '8:00a', event: 'Breakfast' },
			{ time: '8:30a', event: 'Morning Walk' },
			{ time: '8:30a', event: 'Sponsor Workshops (All Day)' },
			{ time: '10:00a', event: 'Typing Competition' },
			{ time: '11:00a', event: 'Network with Asurion' },
			{ time: '12:30p', event: 'Lunch' },
			{ time: '3:00p', event: 'Zumba' },
			{ time: '6:00p', event: 'Dinner' },
			{ time: '9:00p', event: 'Hand Spa' },
			{ time: '10:00p', event: 'Lightning Talks' },
			{ time: '11:00p', event: 'Women in Computing Meetup' },
			{ time: '11:59p', event: 'Midnight Snack' },
		],
	},
	{
		date: 'Nov3',
		day: 'Sun',
		schedule: [
			{ time: '12:00a', event: 'Fireside Chat' },
			{ time: '1:30a', event: 'Karaoke' },
			{ time: '8:00a', event: 'Breakfast' },
			{ time: '9:00a', event: 'Hacking Ends' },
			{ time: '9:10a', event: '"How to Demo" Workshop' },
			{ time: '10:00a', event: 'Expo' },
			{ time: '12:00p', event: 'Lunch' },
			{ time: '1:30p', event: 'Closing Ceremony' },
			{ time: '3:30p', event: 'Buses Depart' },
		],
	},
];

const Schedule = () => {
	const [curSchedule, setCurSchedule] = useState(scheduleData[0]);
	const isMobile = useContext(isMobileContext);

	// onClick={() => setCurSchedule(...)}
	// when use {curSchedule}
	if (isMobile) {
		return (
			<ContainerMobile>
				<Box2StyleMobile>
					<Box2 />
				</Box2StyleMobile>
				<BoxStyleMobile>
					<Box />
				</BoxStyleMobile>
				<PenStyleMobile>
					<Pen />
				</PenStyleMobile>
				<ScheduleLogoMobileStyle>
					<ScheduleTitle />
				</ScheduleLogoMobileStyle>
				<ScheduleBodyContainerMobile>
					<ScheduleBodyTopCol>
						<DayText style={{ width: '4.2em' }} onClick={() => setCurSchedule(scheduleData[0])}>
							{curSchedule.date === 'Nov1' ? <FriBar /> : <FriNoBar />}
						</DayText>
						<DayText style={{ width: '6em' }} onClick={() => setCurSchedule(scheduleData[1])}>
							{curSchedule.date === 'Nov2' ? <SatBar /> : <SatNoBar />}
						</DayText>
						<DayText style={{ width: '5em' }} onClick={() => setCurSchedule(scheduleData[2])}>
							{curSchedule.date === 'Nov3' ? <SunBar /> : <SunNoBar />}
						</DayText>
					</ScheduleBodyTopCol>

					<ScheduleRightCol>
						{curSchedule.schedule.map(({ time, event }) => (
							<div>
								<ScheduleBodyTimeCol>
									<TimeText>{time}</TimeText>
								</ScheduleBodyTimeCol>
								<ScheduleBodyDescriptionCol>
									<EventText>{event}</EventText>
								</ScheduleBodyDescriptionCol>
							</div>
						))}
					</ScheduleRightCol>
				</ScheduleBodyContainerMobile>
			</ContainerMobile>
		);
	} else {
		return (
			<Container>
				<ScheduleLogoStyle>
					<ScheduleTitle />
				</ScheduleLogoStyle>

				<ScheduleBodyContainer>
					<ScheduleBodyTopCol>
						<DayText style={{ width: '5.2em' }} onClick={() => setCurSchedule(scheduleData[0])}>
							{curSchedule.date === 'Nov1' ? <FriBar /> : <FriNoBar />}
						</DayText>
						<DayText style={{ width: '7.2em' }} onClick={() => setCurSchedule(scheduleData[1])}>
							{curSchedule.date === 'Nov2' ? <SatBar /> : <SatNoBar />}
						</DayText>
						<DayText style={{ width: '6.2em' }} onClick={() => setCurSchedule(scheduleData[2])}>
							{curSchedule.date === 'Nov3' ? <SunBar /> : <SunNoBar />}
						</DayText>
					</ScheduleBodyTopCol>

					<ScheduleRightCol>
						{curSchedule.schedule.map(({ time, event }) => (
							<div>
								<ScheduleBodyTimeCol>
									<TimeText>{time}</TimeText>
								</ScheduleBodyTimeCol>
								<ScheduleBodyDescriptionCol>
									<EventText>{event}</EventText>
								</ScheduleBodyDescriptionCol>
							</div>
						))}
					</ScheduleRightCol>
				</ScheduleBodyContainer>

				<BoxStyle>
					<Box />
				</BoxStyle>

				<Box2Style>
					<Box2 />
				</Box2Style>
				<PenStyle>
					<Pen />
				</PenStyle>
			</Container>
		);
	}
};

const ScheduleAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInLeft" // fadeInLeft, or fadeInRight
	>
		<Schedule />
	</InViewMonitor>
);

export default ScheduleAnimated;
