import prisma from '@/lib/prisma'

import NewsSlider from './NewsSlider'

async function getLatestNews() {
	return prisma.news.findMany({
		where: {
			published: true,
		},
		take: 5,
		orderBy: {
			createdAt: 'desc',
		},
	})
}
export default async function News() {
	const newsArray = await getLatestNews()

	return (
		<section className="relative py-10 md:py-16 xl:py-24" id="novedades">
			<div className="mb-6 px-4 md:mb-8 md:flex md:items-end md:justify-between md:px-10 xl:mb-12 2xl:px-16">
				<h2 className="text-center md:text-left">
					Lo que Hemos Logrado Gracias a{' '}
					<span className="text-secondary">Tu Colaboración</span>
				</h2>
			</div>
			<NewsSlider newsArray={newsArray} />
		</section>
	)
}

// export const revalidate = 60; // revalidate this page every 60 seconds
