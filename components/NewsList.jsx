import Image from 'next/image'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import styles from '@/app/(dashboard)/dashboard/index.module.css'

export default function NewsList({ news, setEditNews, editNews }) {
	const handleEdit = () => {
		if (editNews) {
			return (
				confirm(
					'Actualmente estás editando una noticia, si comenzás a editar una nueva, se perderán los cambios de la edición actual.'
				) && setEditNews(news.id)
			)
		}
		setEditNews(news.id)
	}

	return (
		<tr>
			<td>
				<div className="relative aspect-[3/2] w-[200px]">
					<Image src={news.imageUrl} alt="" fill className="object-cover" />
				</div>
			</td>
			<td>{news.title}</td>
			<td>
				<textarea rows={6} cols={60} readOnly className={styles.textarea}>
					{news.description}
				</textarea>
			</td>
			<td>{news.published ? 'Publicado' : 'No Publicado'}</td>
			<td>
				<div className="flex items-center justify-center gap-2">
					<button className={styles.btn_edit} onClick={handleEdit}>
						<AiFillEdit />
					</button>
					<button className={styles.btn_delete}>
						<AiFillDelete />
					</button>
				</div>
			</td>
		</tr>
	)
}
