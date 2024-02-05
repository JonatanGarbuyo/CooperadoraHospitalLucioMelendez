import Image from 'next/image'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

import styles from './index.module.css'

async function getNews() {
	try {
		const response = await fetch('http://localhost:3000/api/news')
		const { data } = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

export default async function Page() {
	const newsArray = await getNews()
	return (
		<section>
			<header>
				<span className={styles.breadcrumb}>{'Dashboard > Home'}</span>
				<div className={styles.header_news}>
					<h1>Listado de novedades</h1>
					<button className={styles.btn_addnew}>Agregar Novedad</button>
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
									<Image src={news.imageUrl} alt="" height="100" width="200" />
								</td>
								<td>{news.title}</td>
								<td>
									<textarea
										rows={6}
										cols={60}
										readOnly
										className={styles.textarea}
									>
										{news.description}
									</textarea>
								</td>
								<td>{news.published ? 'Publicado' : 'No Publicado'}</td>
								<td>
									<button className={styles.btn_edit}>
										<AiFillEdit />
									</button>
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
