import Hero from './components/Hero';
import Loader from './components/Loader';
import Profil from './components/Profil';

export default function Home() {
	return (
		<main className='overflow-hidden'>
			<Hero />
			<Profil />
			<Loader />
		</main>
	);
}
