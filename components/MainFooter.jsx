import Image from 'next/image'
import logo from '@/public/images/coop_new_logo.svg'
import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'

export default function MainFooter() {
	return (
		<footer className="bg-primary px-4 py-10">
			<Image
				src={logo}
				alt="logo de la cooperadora hospital lucio melendez"
				className="mx-auto w-full max-w-[300px] pb-6"
			/>
			<div>
				<ul className="flex flex-col gap-3 [&>li]:flex [&>li]:items-center [&>li]:gap-[10px]">
					<li>
						<SlLocationPin className="h-auto min-w-[1.75rem] fill-white" />
						<p className="text-sm text-white">
							Pres. Juan Domingo Perón 859, B1846 Adrogué, Provincia de Buenos
							Aires
						</p>
					</li>
					<li>
						<BsTelephone className="h-auto w-7 fill-white" />
						<p className="text-sm text-white">+54 11-4294-5555 int 320</p>
					</li>
					<li>
						<VscMail className="h-auto w-7 fill-white" />
						<p className="text-sm text-white">
							cooperadoraluciomelendez@gmail.com
						</p>
					</li>
				</ul>
			</div>
		</footer>
	)
}
