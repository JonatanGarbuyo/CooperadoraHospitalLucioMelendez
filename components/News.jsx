import Image from 'next/image'

const data = [
	{
		image: '/images/apertura_sala_oncologia.png',
		title: 'title1',
		description:
			'Lorem ipsum dolor sit amet consectetur. Laoreet lorem commodo tempus ut turpis sapien condimentum felis viverra.',
		id: 1,
	},
	{
		image: '/images/medicamentos.png',
		title: 'title2',
		description:
			'Lorem ipsum dolor sit amet consectetur. Laoreet lorem commodo tempus ut turpis sapien condimentum felis viverra.',
		id: 2,
	},
	{
		image: '/images/charlas_pedagogicas.png',
		title: 'title3',
		description:
			'Lorem ipsum dolor sit amet consectetur. Laoreet lorem commodo tempus ut turpis sapien condimentum felis viverra.',
		id: 3,
	},
	{
		image: '/images/elementos_laboratorio.png',
		title: 'title4',
		description:
			'Lorem ipsum dolor sit amet consectetur. Laoreet lorem commodo tempus ut turpis sapien condimentum felis viverra.',
		id: 4,
	},
]

export default function News() {
	return (
		<section className="py-10">
			<h2 className="mb-6 px-4 text-center">
				Lo que Hemos Logrado Gracias a{' '}
				<span className="text-secondary">Tu Colaboración</span>
			</h2>
			<ul className="no-scrollbar flex gap-4 overflow-x-scroll px-8 [scroll-snap-type:x_mandatory]">
				{data.map((item) => (
					<li
						key={item.id}
						className=" flex
                        flex-col gap-2 text-left [scroll-snap-align:center] [scroll-snap-stop:always]"
					>
						<div className="relative aspect-[3/2] w-[calc(100dvw-4rem)] overflow-hidden">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="rounded-10 object-cover"
							/>
						</div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</section>
	)
}
