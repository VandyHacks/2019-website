import { useState, useEffect } from 'react';

if (typeof window === 'undefined') {
	global.window = {};
}

const useWindowWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return width;
};

export default useWindowWidth;
