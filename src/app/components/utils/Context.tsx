'use client';
import React from 'react';

type contexts = {
	isLoad: boolean;
	setLoad: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreatContext = React.createContext<contexts>({
	isLoad: false,
	setLoad: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoad, setLoad] = React.useState(false);
	const values = { isLoad, setLoad };
	return (
		<CreatContext.Provider value={values}>{children}</CreatContext.Provider>
	);
};
const useContextProvider = () => {
	const context = React.useContext<contexts>(CreatContext);
	if (context === undefined) {
		throw new Error('use context must use within ContextProvider');
	}
	return context;
};
export { ContextProvider, useContextProvider };
