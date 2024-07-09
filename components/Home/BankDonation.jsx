import Image from 'next/image'
import qr from '@/public/images/qr.svg'
import logoMP from '@/public/images/logo_mercado_pago.svg'

export default function BankDonation() {
	return (
		<section className="flex flex-col items-center gap-6 px-4 py-10 text-center md:gap-8 md:px-10 md:py-16 lg:gap-12 xl:py-24 xl:text-left 2xl:px-16">
			<h2 className="xl:self-start">
				<span className="text-secondary">Donación Voluntaria</span> para
				colaborar con la compra de materiales
			</h2>
			<div className="relative rounded-10 px-2 py-4 shadow-[0px_1px_4px_1px_rgba(0,0,0,0.1)] md:px-4 md:py-7 xl:grid xl:grid-cols-2 xl:gap-8 2xl:gap-20 2xl:px-10 2xl:py-12">
				<div className="mb-6 md:mb-0 md:border-stone-400 md:pb-6 md:max-xl:border-b-[1px] xl:pb-0">
					<p className="mb-4 text-balance text-xl font-medium text-black md:mb-5 md:text-3xl 2xl:mb-8">
						Podés hacerlo mediante una{' '}
						<span className="text-secondary">transferencia o depósito</span> a:
					</p>
					<dl className="flex flex-col gap-1 md:hidden md:gap-3 [&>dd]:border-b-[1px] [&>dd]:border-stone-400 [&>dd]:pb-1 [&>dd]:text-lg [&>dd]:font-bold ">
						<dt>CUENTA CTE. BANCO PROVINCIA</dt>
						<dd>5029-6693/6</dd>
						<dt>TITULAR</dt>
						<dd>Asociación Cooperadora Htal. Lucio Meléndez</dd>
						<dt>CBU</dt>
						<dd>0140082301502900669363</dd>
						<dt>ALIAS</dt>
						<dd>coop.hosp.melendez</dd>
						<dt>CUIT</dt>
						<dd>33-67621770-9</dd>
					</dl>
					<ul className="flex flex-col gap-2 text-left text-xl max-md:hidden 2xl:gap-4 [&_span]:text-2xl [&_span]:font-bold">
						<li>
							CUENTA CTE. BANCO PROVINCIA: <span>5029-6693/6</span>
						</li>
						<li>
							TITULAR: <span>Asociación Cooperadora Htal. Lucio Melendez</span>
						</li>
						<li>
							CBU: <span>0140082301502900669363</span>
						</li>
						<li>
							ALIAS: <span>coop.hosp.melendez</span>
						</li>
						<li>
							CUIT: <span>33-67621770-9</span>
						</li>
					</ul>
				</div>
				<div className="absolute left-0 right-0 m-auto h-full w-px bg-slate-300 max-xl:hidden" />
				<div>
					<p className="mb-4 text-pretty text-xl font-medium text-black md:mb-5 md:mt-6 md:text-3xl xl:mt-0 2xl:mb-8">
						También podés donar desde tu teléfono escaneando el{' '}
						<span className="text-secondary">código QR</span>
					</p>
					<div className="flex flex-col items-center gap-3">
						<Image src={qr} alt="código qr de Mercado Pago" />
						<Image src={logoMP} alt="logo de Mercado Pago" />
					</div>
				</div>
			</div>
		</section>
	)
}
