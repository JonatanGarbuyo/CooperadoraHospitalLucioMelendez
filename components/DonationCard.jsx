import { FaExternalLinkAlt } from 'react-icons/fa'

export default function DonationCard() {
	return (
		<div className="mb-2 flex h-[294px] w-[420px] items-center self-center rounded-10 bg-white text-center max-md:hidden">
			<div>
				<p className="mb-4 text-3xl font-bold tracking-tight text-secondary">
					¡DONÁ AHORA!
				</p>
				<p className="mx-2 mb-2 text-xl tracking-[-0.2px] text-primary">
					Lorem ipsum dolor sit amet consectetur. Volutpat iaculis vitae arcu
					sed dolor.
				</p>
				{/* <div className="mb-4 h-[1.5px] w-full bg-[#E6E6E6]" /> */}
				<p className="mb-2 text-lg font-bold tracking-[-0.18px] text-secondary">
					Donación por Única Vez
				</p>
				<ul className="flex items-center justify-center gap-3 font-extrabold text-accent [&>li]:flex [&>li]:items-center [&>li]:gap-4">
					<li>
						ARS 1000 <FaExternalLinkAlt />
					</li>
					<FadedLine />
					<li>
						ARS 3000 <FaExternalLinkAlt />
					</li>
					<FadedLine />
					<li>
						ARS 5000 <FaExternalLinkAlt />
					</li>
				</ul>
			</div>
		</div>
	)
}

export function FadedLine() {
	return (
		<div className="h-[72px] w-[2px] bg-gradient-to-t from-transparent via-neutral-300 " />
	)
}
