import Image from 'next/image'
import logo from '@/public/images/coop_new_logo.svg'
import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'

export default function MainFooter() {
	return (
		<footer
			className="bg-primary px-4 py-8 md:flex md:flex-row-reverse md:justify-between md:px-6 md:py-12 2xl:px-12"
			id="contacto"
		>
			<Image
				src={logo}
				alt="logo de la cooperadora hospital lucio melendez"
				className="mx-auto w-full max-w-[300px] pb-6 md:mx-0"
			/>
			<div>
				<ul className="flex flex-col gap-3 [&_a]:flex [&_a]:items-center 	[&_a]:gap-[10px] [&_p]:text-sm [&_p]:text-white [&_p]:md:text-lg">
					<li>
						<a href="https://goo.gl/maps/ubQCGyqAjhgivnBA9" target="_blank">
							<SlLocationPin className="h-auto min-w-[1.75rem] fill-white" />
							<p className="text-balance">
								Pres. Juan Domingo Perón 859, B1846 Adrogué, Provincia de Buenos
								Aires
							</p>
						</a>
					</li>
					<li>
						<a href="tel:+541142945555">
							<BsTelephone className="h-auto w-7 fill-white" />
							<p>+54 11-4294-5555 int 320</p>
						</a>
					</li>
					<li>
						<a href="mailto:cooperadoraluciomelendez@gmail.com?subject=Consulta%20desde%20la%20pagina">
							<VscMail className="h-auto w-7 fill-white" />
							<p>cooperadoraluciomelendez@gmail.com</p>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
