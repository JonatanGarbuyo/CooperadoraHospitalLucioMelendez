'use client'

import NewsForm from '../NewsForm'
import { Modal, ModalContent, ModalTrigger } from '../Modal'
import styles from './index.module.css'
import { AiFillEdit } from 'react-icons/ai'
import { useState } from 'react'

const addNewsContent = {
	title: 'Añade una Novedad',
	description: '¡Contale a los demás sobre los avances de la cooperadora!',
	button: <button className={styles.btn_addnew}>Añade una Novedad</button>,
}

const editNewsContent = {
	title: 'Editar Novedad',
	description: 'Realizá cambios en tu publicación.',
	button: (
		<button className={styles.btn_edit}>
			<AiFillEdit />
		</button>
	),
}

const UpdateNews = ({ mode, news }) => {
	const [open, setOpen] = useState(false)
	const content = mode === 'add' ? addNewsContent : editNewsContent
	return (
		<Modal open={open} onOpenChange={setOpen}>
			<ModalTrigger asChild>{content.button}</ModalTrigger>
			<ModalContent>
				<h2 className={styles.title}>{content.title}</h2>
				<p className={styles.description}>{content.description}</p>
				<NewsForm setOpen={setOpen} news={news} />
			</ModalContent>
		</Modal>
	)
}

export default UpdateNews
