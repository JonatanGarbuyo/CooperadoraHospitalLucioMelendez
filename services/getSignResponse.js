export async function getSignResponse({ folder = 'general' }) {
	const response = await fetch(`/api/signuploadform?folder=${folder}`)
	if (!response.ok) {
		throw new Error('Error en la solicitud de firma')
	}

	return response.json()
}

export async function imageUploader({ file, signData }) {
	if (!signData) {
		throw new Error('Los datos de firma (signData) no están disponibles')
	}

	try {
		const formData = new FormData()
		formData.append('file', file)
		formData.append('api_key', signData.apiKey)
		formData.append('timestamp', signData.timestamp)
		formData.append('signature', signData.signature)
		formData.append('folder', signData.folder)

		const response = await fetch(
			`https://api.cloudinary.com/v1_1/${signData.cloudname}/image/upload`,
			{
				method: 'POST',
				body: formData,
			}
		)

		if (!response.ok) {
			throw new Error(response.statusText)
		}

		return response.json()
	} catch (error) {
		throw new Error('Ocurrió un error al cargar la imagen: ' + error.message)
	}
}
