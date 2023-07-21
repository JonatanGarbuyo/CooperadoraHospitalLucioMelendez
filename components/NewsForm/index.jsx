import styles from './index.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { newsFormSchema as schema } from './schema'

const NewsForm = ({ setOpen, news }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data) => {
		console.log(data)
		setOpen(false)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.newsForm}>
			<label>Título*</label>
			<input {...register('title')} value={news?.title} />
			<span>{errors.title?.message}</span>
			<label>Descripción*</label>
			<textarea {...register('description')} value={news?.description} />
			<span>{errors.description?.message}</span>
			<label>Imágen*</label>
			<input type="file" {...register('image')} accept="image/*" />
			<span>{errors.image?.message}</span>
			<button className={styles.saveButton} type="submit">
				Guardar
			</button>
		</form>
	)
}

export default NewsForm
