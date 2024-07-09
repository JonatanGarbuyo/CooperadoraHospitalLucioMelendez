import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required('El email es un campo requerido'),
	password: Yup.string()
		.required('La contraseña es un campo requerido')
		.min(8, 'El mínimo requerido es de 8 caracteres')
		.max(32, 'El máximo permitido son 32 caracteres'),
})

export default loginSchema
