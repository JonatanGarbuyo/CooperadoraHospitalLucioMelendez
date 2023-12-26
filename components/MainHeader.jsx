import Image from 'next/image'
import logo from '@/public/images/coop_new_logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import heartIcon from '@/public/images/heart_icon.svg'

export default function MainHeader() {
	return (
		<header className="h- fixed top-0 z-50 flex h-[--header-height] w-full items-center justify-between bg-primary px-4 shadow-sm md:px-6 ">
			<Image
				src={logo}
				alt="logo de la cooperadora hospital lucio melendez"
				className="md:w-[249px]"
			/>
			<div className="flex items-center gap-2 md:gap-8">
				<button className="flex items-center gap-2 rounded-10 bg-accent px-4 py-1 font-bold text-white md:px-8 md:py-3 md:text-xl">
					<Image
						src={heartIcon}
						alt="Icono de manos formando un corazón"
						className="max-md:hidden"
					/>
					DONAR
				</button>
				<GiHamburgerMenu className="h-auto w-6 fill-white md:w-9" />
			</div>
		</header>
	)
}
