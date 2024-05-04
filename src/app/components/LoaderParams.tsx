'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Loader from './Loader';

const LoaderParams = () => {
	const searchParams = useSearchParams();
	const search = searchParams.get('kepada');
	console.log('parameter:', search);
	return <Loader params={search ? search : 'kepada'} />;
};

export default LoaderParams;
