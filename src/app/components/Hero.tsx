'use client';
import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
	return (
		<section className='h-screen w-screen flex items-center flex-col gap-2 pt-20'>
			<h1 className='text-4xl uppercase font-serif'>pawiwahan</h1>
			<div className='text-5xl font-hendangan capitalize flex-col flex items-center gap-5 m-auto'>
				<span>balarama</span>
				<span className='italic'>&</span>
				<span>fitri</span>
			</div>
			<p className='w-[380px] pt-10 pb-5 text-center'>
				Suatu kehormatan bagi kami, apabila bapak/ibu/sodara/i, berkenan
				hadir untuk memberikan doa restu kepada putra putri kami
			</p>
			<Countdown />
		</section>
	);
};
export default Hero;
