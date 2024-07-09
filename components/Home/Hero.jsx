import Image from 'next/image'
import heartIcon from '@/public/images/heart_icon.svg'
import coopHeroImg from '@/public/images/coop_hero_hd.webp'
import DonationCard from './DonationCard'

export default function Hero() {
	return (
		<section className="flex h-[100svh] min-h-[568px] flex-col justify-between bg-primary pt-[calc(var(--hero-padding-top)+var(--header-height))] md:min-h-[1024px] lg:relative lg:min-h-[768px]">
			<div className="mx-auto mb-4 flex max-w-[80%] flex-col items-center gap-2 px-4 lg:mx-10 lg:mb-0 lg:max-w-[55svw] lg:items-start lg:px-0 2xl:ml-16">
				<h1 className="text-center text-white lg:text-left">
					¡Ayudá con una Causa Noble!
				</h1>
				<p className="text-center text-3xl text-white lg:text-left">
					Tu donación nos permite seguir ayudando a los que más lo necesitan.
				</p>
			</div>
			<a
				href="https://mpago.la/1sDpGAy"
				target="_blank"
				className="mb-2 flex items-center justify-center gap-1 self-center rounded-10 bg-accent px-4 py-2 font-bold text-white hover:bg-accentHover md:hidden"
			>
				<Image src={heartIcon} alt="Icono de manos formando un corazón" />
				<span>DONAR</span>
			</a>
			<DonationCard />
			<div className="relative flex-1 ">
				<Image
					src={coopHeroImg}
					alt="Foto de Inauguración Sala de Oncología"
					priority
					fill
					className="object-cover [mask-image:linear-gradient(transparent,rgba(0,0,0,1)_30%)]"
				/>
			</div>
		</section>
	)
}
