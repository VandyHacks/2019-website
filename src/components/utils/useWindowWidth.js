import { useState, useEffect, useCallback } from 'react';

if (typeof window === 'undefined') {
	global.window = {};
}

const useWindowWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const handleWindowResize = useCallback(() => {
		setWidth(window.innerWidth);
	}, [setWidth]);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		setTimeout(() => {
			handleWindowResize();
			console.log('did the thing');
		}, 1000);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	console.log('returning ', width);
	return width;
};

export default useWindowWidth;
