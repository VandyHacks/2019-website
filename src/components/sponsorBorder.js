import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
	padding: 2em;
	width: 100%;
	border: 3px #3048a1 dashed;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-flow: row;
	justify-items: center;
	align-items: center;
	grid-gap: 2em;
`;

const SponsorBorder = ({ children }) => {
	return <Border>{children}</Border>;
};

export default SponsorBorder;
