'use client'
import { useRef } from 'react'
import Image from 'next/image'

import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'

export default function NewsSlider({ newsArray }) {
	const sliderRef = useRef(null)
	return (
		<>
			{newsArray.length !== 0 && (
				<div>
					<div
						onClick={() => {
							sliderRef.current.scrollLeft -= 300
						}}
						// vertical centered
						className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer md:left-5"
					>
						<ArrowLeft />
					</div>
					<div
						onClick={() => {
							sliderRef.current.scrollLeft += 300
						}}
						className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer md:right-5 "
					>
						<ArrowRight />
					</div>
				</div>
			)}
			<ul
				className="no-scrollbar flex gap-4 overflow-y-hidden overflow-x-scroll scroll-smooth px-4 [scroll-snap-type:x_mandatory] md:gap-8 md:px-10 2xl:px-16"
				ref={sliderRef}
			>
				{newsArray.map((item) => (
					<li
						key={item.id}
						className=" flex
                        max-w-[502px] flex-col gap-2 text-left [scroll-snap-align:center] [scroll-snap-stop:always] md:gap-4"
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
		</>
	)
}
