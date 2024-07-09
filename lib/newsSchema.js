import * as Yup from 'yup'

export const newsSchema = Yup.object().shape({
	title: Yup.string()
		.required()
		.min(4, 'El título debe tener al menos 4 caracteres')
		.max(32, 'El título debe tener menos de 32 caracteres'),
	imageUrl: Yup.string().url().required('La URL de la imagen es requerida'),
	description: Yup.string()
		.required()
		.min(12, 'La descripción debe tener al menos 12 caracteres')
		.max(2048, 'La descripción debe tener menos de 2048 caracteres'),
	published: Yup.boolean().notRequired().default(false),
})
