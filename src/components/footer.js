import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
	background: #2d2d2d;
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
    padding-left: 20px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <FooterMsg>{'Made with <3 by the VandyHacks team'}</FooterMsg>
            <SocialIcons>
                <a href="https://www.facebook.com/vandyhacks" rel="noopener noreferrer" target="_blank">
                    <img class="icon" src="../images/facebook-white.svg" alt="Facebook"></img>
                </a>
                <a href="https://twitter.com/vandyhacks" rel="noopener noreferrer" target="_blank">
                    <img class="icon" src="./images/twitter-white.svg" alt="Twitter"></img>
                </a>
                <a href="https://www.instagram.com/vandyhacks" rel="noopener noreferrer" target="_blank">
                    <img class="icon" src="./images/instagram-white.svg" alt="Instagram"></img>
                </a>
                <a href="https://www.github.com/VandyHacks" rel="noopener noreferrer" target="_blank">
                    <img class="icon" src="./images/github-white.svg" alt="GitHub"></img>
                </a>
            </SocialIcons>
        </StyledFooter>
    );
};

export default Footer;
