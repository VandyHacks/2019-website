import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import ScheduleTitle from '../images/scheduleText.svg';
import ScheduleBar from '../images/scheduleDateBar.svg';
import Box from '../images/stationeryBox.svg';
import Box2 from '../images/stationeryBox2.svg';
import Pen from '../images/stationeryPen.svg';

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

const ScheduleLogoStyle = styled.div`
	width: 35%;
	position: relative;
	top: 20em;
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

const ScheduleBodyContainer = styled.div`
	float: right;
	width: 50%;
`;

const ScheduleBodyTopCol = styled(ScheduleBodyContainer)`
	width: 22%;
	float: left;
	top: 3em;
	position: relative;
`;

const ScheduleBodyTimeCol = styled(ScheduleBodyContainer)`
	width: 20%;
	float: left;
`;

const ScheduleBodyDescriptionCol = styled(ScheduleBodyContainer)`
	width: 50%;
	float: left;
`;

const ScheduleBarCol = styled(ScheduleBodyContainer)`
	width: 3%;
	float: left;
	top: 3em;
	position: relative;
	margin-left: 1em;
`;

const ScheduleBarStyle = styled.div`
	width: 0.5em;
`;

const ScheduleBarHiddenStyle = styled(ScheduleBarStyle)`
	opacity: 0;
`;

const DayText = styled.h2`
	text-align: right;
	font-weight: normal;
	cursor: pointer;
	color: #3048a1;
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
			{ time: '5:30p', event: 'check-in' },
			{ time: '6:00p', event: 'dinner' },
			{ time: '8:30p', event: 'open ceremony' },
			{ time: '10:00p', event: 'Hacking begins' },
			{ time: '10:00p', event: 'pitch session' },
			{ time: '10:00p', event: 'git tech talk' },
			{ time: '10:30p', event: 'beginner switch session' },
			{ time: '11:00p', event: 'beginner tech talk' },
		],
	},
	{
		date: 'Nov2',
		day: 'Sat',
		schedule: [
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Eat' },
			{ time: '5:30p', event: 'Drink' },
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Eat' },
			{ time: '5:30p', event: 'Drink' },
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Eat' },
			{ time: '5:30p', event: 'Drink' },
		],
	},
	{
		date: 'Nov3',
		day: 'Sun',
		schedule: [
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Sleepppp' },
			{ time: '5:30p', event: 'Sleepppp' },
		],
	},
];

const HiddenBar = () => (
	<ScheduleBarHiddenStyle>
		<ScheduleBar />
	</ScheduleBarHiddenStyle>
);

const DisplayedBar = () => (
	<ScheduleBarStyle>
		<ScheduleBar />
	</ScheduleBarStyle>
);

const Schedule = () => {
	const [curSchedule, setCurSchedule] = useState(scheduleData[0]);
	// onClick={() => setCurSchedule(...)}
	// when use {curSchedule}
	return (
		<Container>
			<ScheduleLogoStyle>
				<ScheduleTitle />
			</ScheduleLogoStyle>

			<ScheduleBodyContainer>
				<ScheduleBodyTopCol>
					<DayText onClick={() => setCurSchedule(scheduleData[0])}>Friday Nov 1</DayText>
					<DayText onClick={() => setCurSchedule(scheduleData[1])}>Saturday Nov 2</DayText>
					<DayText onClick={() => setCurSchedule(scheduleData[2])}>Sunday Nov 3</DayText>
				</ScheduleBodyTopCol>

				<ScheduleBarCol>
					{curSchedule.date === 'Nov1' ? <DisplayedBar /> : <HiddenBar />}
					{curSchedule.date === 'Nov2' ? <DisplayedBar /> : <HiddenBar />}
					{curSchedule.date === 'Nov3' ? <DisplayedBar /> : <HiddenBar />}
				</ScheduleBarCol>

				<ScheduleBodyTimeCol>
					{curSchedule.schedule.map(({ time }) => (
						<TimeText>{time}</TimeText>
					))}
				</ScheduleBodyTimeCol>

				<ScheduleBodyDescriptionCol>
					{curSchedule.schedule.map(({ event }) => (
						<EventText>{event}</EventText>
					))}
				</ScheduleBodyDescriptionCol>
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
