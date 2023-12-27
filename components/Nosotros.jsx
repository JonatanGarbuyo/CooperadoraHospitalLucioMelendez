import Image from 'next/image'
import miembrosCoop from '@/public/images/miembros_coop.png'
import miembrosCoop2 from '@/public/images/miembros_coop2.png'
import miembrosDesktop from '@/public/images/miembros_desktop.svg'
import miembrosDesktop2 from '@/public/images/miembros_desktop2.svg'

export default function Nosotros() {
	return (
		<section className="flex flex-col gap-6 bg-primary px-4 py-10 text-center text-white md:gap-8 md:px-10 md:py-16 lg:gap-0 lg:p-0">
			<h2 className="lg:hidden">Nosotros</h2>
			<div className="lg:flex">
				<div className="relative mx-auto mb-2 aspect-[3/2] w-full md:mb-4 lg:hidden">
					<Image
						src={miembrosCoop}
						alt="Selfie grupal de los miembros de la cooperadora"
						fill
						className="rounded-10 object-cover"
					/>
				</div>
				<Image
					src={miembrosDesktop}
					alt="Selfie grupal de los miembros de la cooperadora"
					className="max-w-[50svw] max-lg:hidden"
				/>
				<div className="lg:px-10 lg:pt-16">
					<h2 className="mb-8 max-lg:hidden">Nosotros</h2>
					<p className="text-balance text-lg font-medium text-white md:text-2xl">
						La Asociación Cooperadora del Hospital Lucio Meléndez es una{' '}
						<span className="font-bold">
							Asociación Civil Sin Fines de Lucro.
						</span>
					</p>
				</div>
			</div>

			<div className="lg:mb-[-2.5rem] lg:flex">
				<div className="relative mx-auto mb-2 aspect-[3/2] w-full md:mb-4 lg:hidden">
					<Image
						src={miembrosCoop2}
						alt="Selfie grupal de los miembros de la cooperadora"
						fill
						className="rounded-10 object-cover"
					/>
				</div>
				<p className="self-center text-balance text-lg font-medium text-white md:text-2xl lg:px-10 lg:pb-10">
					Nuestra Sede Central esta ubicada en el{' '}
					<span className="font-bold">Hall Central del Hospital,</span> y la
					atención es de{' '}
					<span className="font-bold">lunes a viernes de 8.00 a 13.00 hs.</span>
				</p>
				<Image
					src={miembrosDesktop2}
					alt="Selfie grupal de los miembros de la cooperadora"
					className="relative bottom-10 max-w-[50svw] max-lg:hidden"
				/>
			</div>
		</section>
	)
}
