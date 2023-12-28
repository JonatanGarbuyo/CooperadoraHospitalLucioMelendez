'use client'

import Image from 'next/image'
import { useRef } from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'

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
	const sliderRef = useRef(null)

	return (
		<section className="py-10 md:py-16">
			<div className="mb-6 px-4 md:mb-8 md:flex md:items-end md:justify-between md:px-10">
				<h2 className="text-center md:text-left">
					Lo que Hemos Logrado Gracias a{' '}
					<span className="text-secondary">Tu Colaboración</span>
				</h2>
				<div className="flex gap-1 max-md:hidden">
					<div
						onClick={() => {
							sliderRef.current.scrollLeft -= 300
						}}
						className="cursor-pointer"
					>
						<ArrowLeft />
					</div>
					<div
						onClick={() => {
							sliderRef.current.scrollLeft += 300
						}}
						className="cursor-pointer"
					>
						<ArrowRight />
					</div>
				</div>
			</div>
			<ul
				className="no-scrollbar flex gap-4 overflow-y-hidden overflow-x-scroll scroll-smooth px-4 [scroll-snap-type:x_mandatory] md:gap-8 md:px-10"
				ref={sliderRef}
			>
				{data.map((item) => (
					<li
						key={item.id}
						className=" flex
                        flex-col gap-2 text-left [scroll-snap-align:center] [scroll-snap-stop:always] md:gap-4"
					>
						<div className="relative aspect-[3/2] w-[calc(100dvw-4rem)] max-w-[502px] overflow-hidden">
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
