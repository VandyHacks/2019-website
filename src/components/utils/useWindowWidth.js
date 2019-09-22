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

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [handleWindowResize]);

	return width;
};

export default useWindowWidth;
