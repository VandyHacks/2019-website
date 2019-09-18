import React from 'react';
import styled, { keyframes } from 'styled-components';

import ArrowAsset from '../../images/faqArrow2.svg';

const spin = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(180deg); }
`;

const spinReverse = keyframes`
	from { transform: rotate(180deg); }
	to { transform: rotate(0deg); }
`;

const ArrowContainer = styled.div`
	display: inline-block;
	margin-left: 5px;
	svg {
		position: relative;
		top: -2px;
		animation: ${props => (props.open ? spinReverse : spin)} 0.3s linear forwards;
	}
`;

const Arrow = ({ open }) => (
	<ArrowContainer open={open}>
		<ArrowAsset />
	</ArrowContainer>
);

export default Arrow;
