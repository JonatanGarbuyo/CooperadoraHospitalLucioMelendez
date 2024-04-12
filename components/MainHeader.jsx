import Image from 'next/image'
import logo from '@/public/images/coop_new_logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import heartIcon from '@/public/images/heart_icon.svg'

export default function MainHeader() {
	return (
		<header className="fixed top-0 z-50 flex h-[--header-height] w-full items-center justify-between bg-primary px-4 shadow-md md:px-6 xl:px-8 2xl:px-12">
			<Image
				src={logo}
				alt="logo de la cooperadora hospital lucio melendez"
				className="md:w-[249px] 2xl:w-[300px]"
			/>
			<nav>
				<ul className="flex gap-12 text-lg font-medium text-white max-lg:hidden xl:text-xl">
					<li>
						<a href="#" className="transition-colors hover:text-accent">
							Home
						</a>
					</li>
					<li>
						<a
							href="#novedades"
							className="transition-colors hover:text-accent"
						>
							Novedades
						</a>
					</li>
					<li>
						<a href="#nosotros" className="transition-colors hover:text-accent">
							Nosotros
						</a>
					</li>
					<li>
						<a href="#contacto" className="transition-colors hover:text-accent">
							Contacto
						</a>
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-2 md:gap-8">
				<a
					className="flex items-center gap-2 rounded-10 bg-accent px-4 py-1 font-bold text-white hover:bg-accentHover md:px-8 md:py-3 md:text-xl 2xl:px-10 2xl:py-3.5 2xl:text-2xl"
					href="https://mpago.la/1sDpGAy"
					target="_blank"
				>
					<Image
						src={heartIcon}
						alt="Icono de manos formando un corazón"
						className="max-md:hidden 2xl:size-8"
					/>
					DONAR
				</a>
				<GiHamburgerMenu className="hidden h-auto w-6 fill-white md:w-9" />
			</div>
		</header>
	)
}
