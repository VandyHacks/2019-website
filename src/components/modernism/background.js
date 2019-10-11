import React from 'react';

import HeaderShape from '../../images/HeaderShape.svg';
import TextHeaderShapes from '../../images/TextHeaderShapes.svg';

const TopBackgroundArt = () => {
	return <img id="top-background-art" src={HeaderShape} alt="" />;
};

const BottomBackgroundArt = () => {
	return <img id="bottom-background-art" src={TextHeaderShapes} alt="" />;
};

export { TopBackgroundArt, BottomBackgroundArt };
