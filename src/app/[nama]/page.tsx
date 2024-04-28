import Hero from '../components/Hero';
import Profil from '../components/Profil';
import Loader from '../components/Loader';
import React from 'react';
import MusicControl from '../components/MusicControl';
import Galleri from '../components/Galleri';
import { ContextProvider } from '../components/utils/Context';
export default function Home({ params }: { params: { nama: string } }) {
	return (
		<main className='overflow-hidden'>
			<ContextProvider>
				<Hero />
				<Profil />
				<Galleri />
				<Loader params={params.nama} />
			</ContextProvider>
		</main>
	);
}
