import Image from 'next/image'
import qr from '@/public/images/qr.svg'
import logoMP from '@/public/images/logo_mercado_pago.svg'

export default function BankDonation() {
	return (
		<section className="px-4 py-10 text-center">
			<h2 className="mb-6">
				<span className="text-secondary">Donación Volunatria</span> para
				colaborar con la compra de materiales
			</h2>
			<div className="rounded-10 pb-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]">
				<div className="mb-6">
					<p className="mb-4 text-xl font-medium text-black">
						Podés hacerlo mediante una{' '}
						<span className="text-secondary">transferencia o depósito</span> a:
					</p>
					<dl className="flex flex-col gap-1">
						<dt>CUENTA CTE. BANCO PROVINCIA</dt>
						<dd className="border-b-[1px] border-opacity-75 pb-1 text-lg font-bold">
							5029-6693/6
						</dd>
						<dt>TITULAR</dt>
						<dd className="border-b-[1px] border-opacity-75 pb-1 text-lg font-bold">
							Asociación Cooperadora Htal. Lucio Melendez
						</dd>
						<dt>CBU</dt>
						<dd className="border-b-[1px] border-opacity-75 pb-1 text-lg font-bold">
							0140082301502900669363
						</dd>
						<dt>ALIAS</dt>
						<dd className="border-b-[1px] border-opacity-75 pb-1 text-lg font-bold">
							coop.hosp.melendez
						</dd>
						<dt>CUIT</dt>
						<dd className="border-b-[1px] border-opacity-75 pb-1 text-lg font-bold">
							33-67621770-9
						</dd>
					</dl>
				</div>
				<div>
					<p className="mb-4 text-xl font-medium text-black">
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
