import { FaExternalLinkAlt } from 'react-icons/fa'

export default function DonationCard() {
	return (
		<div className="z-40 mb-2 flex max-h-[294px] min-h-[294px] min-w-[420px] max-w-[420px] items-center self-center rounded-10 bg-white text-center shadow-lg max-md:hidden lg:absolute lg:right-10 lg:top-[calc(var(--hero-padding-top)+var(--header-height))] lg:mb-0 2xl:right-16">
			<div>
				<p className="mb-4 text-3xl font-bold tracking-tight text-secondary">
					¡DONÁ AHORA!
				</p>
				<p className="mx-2 mb-2 text-xl tracking-[-0.2px] text-primary">
					Tu contribución es fundamental para el Hospital Público Lucio
					Meléndez.
				</p>
				{/* <div className="mb-4 h-[1.5px] w-full bg-[#E6E6E6]" /> */}
				<p className="mb-2 text-lg font-bold tracking-[-0.18px] text-secondary">
					Donación por Única Vez
				</p>
				<ul className="flex items-center justify-center gap-3 font-extrabold text-accent transition-all [&_a]:flex [&_a]:items-center [&_a]:gap-4">
					<li>
						<a
							href="https://mpago.la/2BFVwq7"
							target="_blank"
							className="hover:text-accentHover"
						>
							ARS 1000 <FaExternalLinkAlt />
						</a>
					</li>
					<FadedLine />
					<li>
						<a
							href="https://mpago.la/1sDpGAy"
							target="_blank"
							className="hover:text-accentHover"
						>
							ARS 3000 <FaExternalLinkAlt />
						</a>
					</li>
					<FadedLine />
					<li>
						<a
							href="https://mpago.la/11TABB1"
							target="_blank"
							className="hover:text-accentHover"
						>
							ARS 5000 <FaExternalLinkAlt />
						</a>
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
