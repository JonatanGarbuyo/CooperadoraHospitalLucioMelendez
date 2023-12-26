import Image from 'next/image'
import qr from '@/public/images/qr.svg'
import logoMP from '@/public/images/logo_mercado_pago.svg'

export default function BankDonation() {
	return (
		<section className="flex flex-col items-center gap-6 px-4 py-10 text-center md:gap-8 md:px-10 md:py-16">
			<h2>
				<span className="text-secondary">Donación Volunatria</span> para
				colaborar con la compra de materiales
			</h2>
			<div className="rounded-10 px-2 py-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] md:px-4 md:py-6">
				<div className="mb-6 md:mb-0 md:border-b-[1px] md:border-stone-400 md:pb-6">
					<p className="mb-4 text-balance text-xl font-medium text-black md:text-3xl">
						Podés hacerlo mediante una{' '}
						<span className="text-secondary">transferencia o depósito</span> a:
					</p>
					<dl className="flex flex-col gap-1 md:hidden [&>dd]:border-b-[1px] [&>dd]:border-stone-400 [&>dd]:pb-1 [&>dd]:text-lg [&>dd]:font-bold">
						<dt>CUENTA CTE. BANCO PROVINCIA</dt>
						<dd>5029-6693/6</dd>
						<dt>TITULAR</dt>
						<dd>Asociación Cooperadora Htal. Lucio Melendez</dd>
						<dt>CBU</dt>
						<dd>0140082301502900669363</dd>
						<dt>ALIAS</dt>
						<dd>coop.hosp.melendez</dd>
						<dt>CUIT</dt>
						<dd>33-67621770-9</dd>
					</dl>
					<ul className="flex flex-col gap-2 text-left text-xl max-md:hidden [&_span]:text-2xl [&_span]:font-bold">
						<li>
							CUENTA CTE. BANCO PROVINCIA: <span>5029-6693/6</span>
						</li>
						<li>
							TITULAR: <span>Asociación Cooperadora Htal. Lucio Melendez</span>
						</li>
						<li>
							CBU: <span>coop.hosp.melendez</span>
						</li>
						<li>
							ALIAS: <span>5029-6693/6</span>
						</li>
						<li>
							CUIT: <span>33-67621770-9</span>
						</li>
					</ul>
				</div>
				<div>
					<p className="mb-4 text-balance text-xl font-medium text-black md:mt-6 md:text-3xl">
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
