import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    position: fixed;
    maxWidth: '100px';
    minWidth: '50px';
    width: '10%';
    z-index: 10000;
    margin-top: -9em;
`;

let IsInvert = false;

function invertColors() {
	if (!IsInvert) {
		document.body.style = 'background: black; filter: invert(95%);';
		IsInvert = true;
	} else {
		document.body.style = 'background: white; filter: invert(0%)';
		IsInvert = false;
	}
}

const InvertButton = () => (
	<ButtonStyle>
		<button onClick={invertColors} style={{ backgroundColor: 'white', color: '#293993' }}>
			Change Mode
		</button>
	</ButtonStyle>
);

export default InvertButton;
