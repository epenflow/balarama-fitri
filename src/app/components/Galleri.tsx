import React from 'react';
import Image from 'next/image';
const foto: Array<string> = ['satu.jpg', 'dua.jpg', 'tiga.jpg'];
const Galleri = () => {
	return (
		<section className='w-screen p-10 flex flex-wrap justify-center items-center gap-2'>
			{foto.map((val, index) => (
				<Image
					key={index}
					alt='wedding'
					src={`/galeri/${val}`}
					width={250}
					height={100}
				/>
			))}
		</section>
	);
};

export default Galleri;
