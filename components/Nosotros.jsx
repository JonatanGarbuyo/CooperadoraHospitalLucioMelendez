import Image from 'next/image'
import miembrosCoop from '@/public/images/miembros_coop.png'
import miembrosCoop2 from '@/public/images/miembros_coop2.png'

export default function Nosotros() {
	return (
		<section className="flex flex-col gap-6 bg-primary px-4 py-10 text-center text-white">
			<h2>Nosotros</h2>
			<div>
				<div className="relative mx-auto mb-2 aspect-[3/2] w-[calc(100dvw-2rem)]">
					<Image
						src={miembrosCoop}
						alt="Selfie grupal de los miembros de la cooperadora"
						fill
						className="rounded-10 object-cover"
					/>
				</div>
				<p className="text-lg font-medium text-white">
					La Asociación Cooperadora del Hospital Lucio Meléndez es una{' '}
					<span className="font-bold">
						Asociación Civil Sin Fines de Lucro.
					</span>
				</p>
			</div>
			<div>
				<div className="relative mx-auto mb-2 aspect-[3/2] w-[calc(100dvw-2rem)]">
					<Image
						src={miembrosCoop2}
						alt="Selfie grupal de los miembros de la cooperadora"
						fill
						className="rounded-10 object-cover"
					/>
				</div>
				<p className="text-lg font-medium text-white">
					Nuestra Sede Central esta ubicada en el{' '}
					<span className="font-bold">Hall Central del Hospital,</span> y la
					atención es de{' '}
					<span className="font-bold">lunes a viernes de 8.00 a 13.00 hs.</span>
				</p>
			</div>
		</section>
	)
}
