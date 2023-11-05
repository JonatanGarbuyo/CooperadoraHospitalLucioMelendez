import Image from 'next/image'
import logo from '@/public/images/coop_new_logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function MainHeader() {
	return (
		<header className="flex h-20 items-center justify-between bg-primary pl-4 pr-4">
			<Image src={logo} alt="logo de la cooperadora hospital lucio melendez" />
			<div className="flex items-center gap-2">
				<button className="rounded-10 bg-accent px-4 py-1 font-bold text-white">
					DONAR
				</button>
				<GiHamburgerMenu className="h-auto w-6 fill-white" />
			</div>
		</header>
	)
}
