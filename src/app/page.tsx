import { ContextProvider } from './components/utils/Context';
import Hero from './components/Hero';
import Profil from './components/Profil';
import Galleri from './components/Galleri';
import Loader from './components/Loader';
import LoaderParams from './components/LoaderParams';
export default function Page() {
	return (
		<ContextProvider>
			<Hero />
			<Profil />
			<Galleri />
			<LoaderParams />
		</ContextProvider>
	);
}
