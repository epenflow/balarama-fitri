'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Loader = () => {
	const searchParams = useSearchParams();
	const search = searchParams.get('kepada');
	const [isActived, setActived] = React.useState<boolean>(false);
	function handleClick() {
		setActived((prev) => !prev);
	}
	React.useEffect(() => {
		if (!isActived) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isActived]);
	return !isActived ? (
		<div className='w-screen h-screen bg-[#D1CFCA] z-50 fixed top-0 flex flex-col pb-10 items-center'>
			<div className='text-5xl font-hendangan capitalize flex-col flex items-center gap-5 m-auto text-[#2C3C6D]'>
				<span>balarama</span>
				<span className='italic'>&</span>
				<span>fitri</span>
			</div>
			<span className='capitalize text-center text-2xl'>kepada yth.</span>
			<span className='text-center underline font-medium capitalize text-lg'>
				{search}
			</span>
			<button
				className='bg-[#2C3C6D] py-2 px-5 my-5 text-[#D1CFCA] rounded-full'
				onClick={handleClick}>
				buka undangan
			</button>
		</div>
	) : null;
};

export default Loader;
