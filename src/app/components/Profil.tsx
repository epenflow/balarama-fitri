'use client';
import Link from 'next/link';
import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
const Profil = () => {
	return (
		<section className='h-screen w-screen flex flex-col items-center mb-10'>
			<span className='text-center text-2xl lg:text-6xl m-2 font-sans'>
				Om Swastiastu
			</span>
			<span className='text-center lg:w-1/2'>
				Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa, kami
				sekeluarga bermaksud menyelenggarakan upacara manusia yadnya
				Pawiwahan/pernikahan putra-putri kami.
			</span>
			<div className='flex flex-col lg:flex-row text-center gap-5 m-auto'>
				<div className='flex flex-col'>
					<span className='text-5xl'>Made wahyu balarama</span>
					<span className='text-lg'>
						Putra kedua dari pasangan bapak I made wendra & ibu Ni
						nyoman mariani
					</span>
				</div>
				<div className='flex flex-col'>
					<span className='text-5xl'>Fitri Wulandari</span>
					<span className='text-lg'>
						Putri pertama dari pasangan Bapak nuril ahmad & ibu Alm.
						Ni kadek sukariani
					</span>
				</div>
			</div>
			<div className='flex flex-col text-center gap-2 m-2'>
				<span className='text-2xl lg:text-4xl font-serif'>
					Save The Date
				</span>
				<span className='text-2xl lg:text-5xl capitalize relative'>
					<span> kamis, 2 mei 2024</span>
				</span>
				<span className='text-2xl lg:text-3xl capitalize'>
					pukul 13:00 wita - selesai
				</span>
				<span>Bakas, Banjarangkan, Klungkung, Bali</span>
				<Link
					href={
						'https://www.google.com/maps?q=-8.520263671875,115.36083221435547&z=17&hl=en'
					}
					className='flex flex-row justify-center items-center gap-2 capitalize text-base bg-[#2C3C6D] p-4 rounded-full text-[#D1CFCA]'>
					<FaMapLocationDot />
					<span>lihat lokasi</span>
				</Link>
			</div>
		</section>
	);
};

export default Profil;
