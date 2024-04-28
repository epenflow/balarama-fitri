'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
const Loader = ({ params }: { params: string }) => {
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
			<div
				style={{
					backgroundImage: `url('/BG.jpg')`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
				className='absolute w-screen h-screen -z-10'></div>
			<div className='text-5xl font-hendangan capitalize flex-col flex items-center gap-5 m-auto text-[#2C3C6D]'>
				<span>balarama</span>
				<span className='italic'>&</span>
				<span>fitri</span>
			</div>
			<span className='capitalize text-center text-2xl text-[#D1CFCA]'>
				kepada yth.
			</span>
			<span className='text-center underline font-medium capitalize text-lg text-[#D1CFCA]'>
				{decodeURI(params)}
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
