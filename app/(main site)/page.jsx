import BankDonation from '@/components/Home/BankDonation'
import Hero from '@/components/Home/Hero'
import News from '@/components/Home/News'
import Nosotros from '@/components/Home/Nosotros'

export default function Page() {
	return (
		<div>
			<Hero />
			<News />
			<Nosotros />
			<BankDonation />
		</div>
	)
}
