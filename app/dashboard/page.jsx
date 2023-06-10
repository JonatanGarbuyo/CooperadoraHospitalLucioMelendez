import Image from 'next/image'

export default function Page() {
	const newsArray = [
		{
			id: 1,
			title: 'Noticia 1',
			image_url: '/images/frente_del_hospital.png',
			description: 'descripción 1',
			is_published: true,
		},
		{
			id: 2,
			title: 'Noticia 2',
			image_url: '/images/frente_del_hospital.png',
			description: 'descripción 2',
			is_published: true,
		},
		{
			id: 3,
			title: 'Noticia 3',
			image_url: '/images/frente_del_hospital.png',
			description: 'descripción 3',
			is_published: true,
		},
		{
			id: 4,
			title: 'Noticia 4',
			image_url: '/images/frente_del_hospital.png',
			description: 'descripción 4',
			is_published: true,
		},
		{
			id: 5,
			title: 'Noticia 5',
			image_url: '/images/frente_del_hospital.png',
			description: 'descripción 5',
			is_published: true,
		},
	]
	return (
		<section>
			<header>
				<h1>Listado de novedades</h1>
			</header>
			<ul>
				{newsArray.map((news) => {
					return (
						<li key={news.id}>
							<Image src={news.image_url} alt="" height="100" width="200" />
							<h2>{news.title}</h2>
							<p>{news.description}</p>
							<p>¿Está publicado? {news.is_published ? 'Sí' : 'No'}</p>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
