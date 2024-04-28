'use client';
import React from 'react';
import Countdown from './Countdown';
import { useContextProvider } from './utils/Context';

const Hero = () => {
	const audioControls = React.useRef<HTMLAudioElement>(null);
	const { isLoad } = useContextProvider();
	React.useEffect(() => {
		if (isLoad) {
			audioControls.current?.play();
		}
	}, [isLoad]);
	return (
		<section className='h-screen w-screen flex items-center flex-col gap-2 text-[#D1CFCA] relative p-2'>
			<div
				style={{
					backgroundImage: `url('/BG.jpg')`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
				className='absolute w-screen h-screen -z-10 top-0'></div>
			<h1 className='text-4xl uppercase font-serif'>pawiwahan</h1>
			<div className='text-5xl font-hendangan capitalize flex-col flex items-center gap-5 m-auto'>
				<span>balarama</span>
				<span className='italic'>&</span>
				<span>fitri</span>
			</div>
			<audio
				controls
				ref={audioControls}>
				<source
					src='/wedding.mp3'
					type='audio/mpeg'
				/>
			</audio>
			<p className='w-[380px] pt-10 pb-5 text-center'>
				Suatu kehormatan bagi kami, apabila bapak/ibu/sodara/i, berkenan
				hadir untuk memberikan doa restu kepada putra putri kami
			</p>
			<Countdown />
		</section>
	);
};
export default Hero;
