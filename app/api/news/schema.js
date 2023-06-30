import * as Yup from 'yup'

export const newsSchema = Yup.object().shape({
	title: Yup.string()
		.required()
		.min(4, 'must be at least 4 characters long')
		.max(32, 'must be less than 32 characters long'),
	imageUrl: Yup.string().url().required(),
	description: Yup.string()
		.required()
		.min(12, 'must be at least 12 characters long')
		.max(2048, 'must be less than 2048 characters long'),
	published: Yup.boolean().notRequired().default(false),
})
