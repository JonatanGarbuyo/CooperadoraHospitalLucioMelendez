import Image from 'next/image'
import { AiFillDelete } from 'react-icons/ai'
import  UpdateNews  from '../../components/UpdateNews'

import styles from './index.module.css'

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
				<span className={styles.breadcrumb}>{'Dashboard > Home'}</span>
				<div className={styles.header_news}>
					<h1>Listado de novedades</h1>
					<UpdateNews mode={'add'} />
				</div>
			</header>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Imagen</th>
						<th>Titulo</th>
						<th>Descripción</th>
						<th>Estado</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{newsArray.map((news) => {
						return (
							<tr key={news.id}>
								<td>
									<Image src={news.image_url} alt="" height="100" width="200" />
								</td>
								<td>{news.title}</td>
								<td>{news.description}</td>
								<td>{news.is_published ? 'Publicado' : 'No Publicado'}</td>
								<td>
									<UpdateNews mode={'edit'} news={news} />
									<button className={styles.btn_delete}>
										<AiFillDelete />
									</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</section>
	)
}
