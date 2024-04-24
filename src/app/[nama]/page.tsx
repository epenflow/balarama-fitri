import Hero from '../components/Hero';
import Profil from '../components/Profil';
import Loader from '../components/Loader';
import React from 'react';
export default function Home({ params }: { params: { nama: string } }) {
	return (
		<main className='overflow-hidden'>
			<Hero />
			<Profil />
			<Loader params={params.nama} />
		</main>
	);
}
