'use client'
import { useEffect, useState } from 'react'

import styles from './index.module.css'
import AddNews from '@/components/AddNews'
import { getNews } from '@/lib/newsRequests'
import NewsList from '@/components/NewsList'
import UpdateNews from '@/components/UpdateNews'

export default function Page() {
	const [newsArray, setNewsArray] = useState([])
	const [addNewRow, setAddNewRow] = useState(false)
	const [editNews, setEditNews] = useState(null)

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getNews()
				setNewsArray(data)
			} catch (error) {
				console.error(error)
				alert(`Error al cargar las noticias: ${error.message}`)
			}
		}

		fetchData()
	}, [])

	return (
		<section>
			<header>
				<span className={styles.breadcrumb}>{'Dashboard > Home'}</span>
				<div className={styles.header_news}>
					<h1>Listado de novedades</h1>
					<button
						className={styles.btn_addnew}
						onClick={() => setAddNewRow(true)}
					>
						Agregar Novedad
					</button>
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
					{addNewRow && (
						<AddNews setAddNewRow={setAddNewRow} setNewsArray={setNewsArray} />
					)}
					{newsArray.map((news) => {
						return editNews === news.id ? (
							<UpdateNews newsToUpdate={news} setEditNews={setEditNews} />
						) : (
							<NewsList
								key={news.id}
								news={news}
								setEditNews={setEditNews}
								editNews={editNews}
								setNewsArray={setNewsArray}
							/>
						)
					})}
				</tbody>
			</table>
		</section>
	)
}
