import React from 'react';
import styled from 'styled-components';

////Need to make the button toggalable, e.g. can turn off the inverted mode

const ButtonStyle = styled.div`
    position: absolute;
    margin-top: 1em; 
`;

var IsInvert = false;

function invertColors()
{
    if (!IsInvert)
    {
        document.body.style = 'background: black; filter: invert(95%);';
        IsInvert = true;
    }
    else
    {
        document.body.style = 'background: white; filter: invert(0%)';
        IsInvert = false;
    }
} 

const InvertButton = () => ( 
    <ButtonStyle>
        <button onClick={invertColors} style={{background: 'white', color: '#293993'}}>Night Mode</button>
    </ButtonStyle>
);

export default InvertButton;