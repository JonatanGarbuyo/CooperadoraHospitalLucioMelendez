'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import { getNews } from '@/lib/newsRequests'

export default function News() {
	const sliderRef = useRef(null)
	const [newsArray, setNewsArray] = useState([])

	useEffect(() => {
		;(async function fetchData() {
			try {
				const data = await getNews()
				setNewsArray(data)
			} catch (error) {
				console.error(error)
			}
		})()
	}, [])

	return (
		<section className="py-10 md:py-16 xl:py-24">
			<div className="mb-6 px-4 md:mb-8 md:flex md:items-end md:justify-between md:px-10 xl:mb-12 2xl:px-16">
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
				className="no-scrollbar flex gap-4 overflow-y-hidden overflow-x-scroll scroll-smooth px-4 [scroll-snap-type:x_mandatory] md:gap-8 md:px-10 2xl:px-16"
				ref={sliderRef}
			>
				{newsArray.map((item) => (
					<li
						key={item.id}
						className=" flex
                        flex-col gap-2 text-left [scroll-snap-align:center] [scroll-snap-stop:always] md:gap-4"
					>
						<div className="relative aspect-[3/2] w-[calc(100dvw-4rem)] max-w-[502px] overflow-hidden">
							<Image
								src={item.imageUrl}
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
