import React from 'react';
import styled, { keyframes } from 'styled-components';

import ArrowSVG from '../../../images/modernism/FAQArrow.svg';

const arrowDown = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`;

const arrowUp = keyframes`
  from { transform: rotate(180deg); }
  to { transform: rotate(0deg); }
`;

const Container = styled.div`
  display: inline-block;
  margin-left: 5px;
  svg {
    position: relative; 
    animation ${props => (props.open ? arrowUp : arrowDown)} 0.3 linear forwards;
  }
`;
