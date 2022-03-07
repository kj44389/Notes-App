import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) => {
	//Parse saved local storage to json. If it doesn't exist set default value
	return JSON.parse(localStorage.getItem(key)) || defaultValue;
};
const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
