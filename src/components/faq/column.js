import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import QuestionSet from './questionSet';
import isMobileContext from '../isMobileContext';

// accepted props of a FAQ column (2 on desktop, 1 on mobile + tablet)

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
`;

const ColumnContainerMobile = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Column = ({ questions }) => {
	const [openedIndex, setOpened] = useState(0);
	const isMobile = useContext(isMobileContext);

	const onQuestionClicked = index => {
		setOpened(openedIndex === index ? -1 : index);
	};
	if (isMobile) {
		return (
			<ColumnContainerMobile>
				{questions.map(({ question, answer }, i) => (
					<QuestionSet
						key={question}
						question={question}
						answer={answer}
						shouldOpen={openedIndex === i}
						onClick={() => onQuestionClicked(i)}
					/>
				))}
			</ColumnContainerMobile>
		);
	}
	return (
		<ColumnContainer>
			{questions.map(({ question, answer }, i) => (
				<QuestionSet
					key={question}
					question={question}
					answer={answer}
					shouldOpen={openedIndex === i}
					onClick={() => onQuestionClicked(i)}
				/>
			))}
		</ColumnContainer>
	);
};

export default Column;
