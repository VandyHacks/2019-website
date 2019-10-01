import React from 'react';
import styled from 'styled-components';

import Facebook from '../images/facebook.svg'
import Github from '../images/github.svg'
import Instagram from '../images/instagram.svg'
import Twitter from '../images/twitter.svg'

const StyledFooter = styled.div`
	background: #fff;
	color: #fff;
	text-align: center;
	height: 60px;
	overflow: none;
`;

const SocialIcons = styled.div`
    display: inline-block;
    padding-top: 1.5px;
    float: right;
    padding-right: 5px;
`

const FooterMsg = styled.div`
    display: inline-block;
    float: left;
`


const Footer = () => {
    return (
        <StyledFooter>
            <FooterMsg>{'Made with <3 by the VandyHacks team'}</FooterMsg>
            <SocialIcons>
                <a href="https://www.facebook.com/vandyhacks" rel="noopener noreferrer" target="_blank">
                    <Facebook />
                </a>
                <a href="https://twitter.com/vandyhacks" rel="noopener noreferrer" target="_blank">
                    <Twitter />
                </a>
                <a href="https://www.instagram.com/vandyhacks" rel="noopener noreferrer" target="_blank">
                    <Instagram />
                </a>
                <a href="https://www.github.com/VandyHacks" rel="noopener noreferrer" target="_blank">
                    <Github />
                </a>
            </SocialIcons>
        </StyledFooter >
    );
};

export default Footer;
