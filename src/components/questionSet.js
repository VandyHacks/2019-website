import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Arrow from './arrow';

import throttle from 'lodash.throttle';

const QuestionSetContainer = styled.div`
	margin-bottom: 25px;
`;

const QuestionClickArea = styled.div`
	text-align: left;
	&:focus {
		opacity: 0.8;
	}
`;

const Collapsible = styled.div`
	overflow: hidden;
	transition: height 0.3s ease-out;
	height: ${props => (props.open ? props.height : '0')}px;
`;

const NoWrapContainer = styled.span`
	white-space: nowrap;
`;

const StyledQuestion = styled.h2`
	cursor: pointer;
	font-size: 1.2em;
	font-weight: lighter;
	text-align: left;
`;

const StyledAnswer = styled.p`
	text-align: left;
`;

const getSplitText = (text, shouldOpen) => {
	const lastSpaceIndex = text.lastIndexOf(' ');
	const wrappableText = text.substring(0, lastSpaceIndex + 1);
	const lastWord = text.substring(lastSpaceIndex);

	return (
		// consider text later
		<StyledQuestion>
			{wrappableText}
			<NoWrapContainer>
				{lastWord}
				<Arrow open={shouldOpen} />
			</NoWrapContainer>
		</StyledQuestion>
	);
};

const getHeight = id => {
	const el = document.getElementById(id);
	return el ? el.scrollHeight : 100;
};

const QuestionSet = ({ question, answer, shouldOpen, onClick }) => {
	const [height, setHeight] = useState(getHeight(question));

	const throttledSetHeight = throttle(() => setHeight(getHeight(question)), 250);

	useEffect(() => {
		setHeight(getHeight(question));
		window.addEventListener('resize', throttledSetHeight);

		return () => {
			window.removeEventListener('resize', throttledSetHeight);
		};
	}, [question, throttledSetHeight]);

	return (
		<QuestionSetContainer>
			<QuestionClickArea onClick={onClick}>{getSplitText(question, shouldOpen)}</QuestionClickArea>
			<Collapsible id={question} open={shouldOpen} height={height}>
				<StyledAnswer>{answer}</StyledAnswer>
			</Collapsible>
		</QuestionSetContainer>
	);
};

export default QuestionSet;
