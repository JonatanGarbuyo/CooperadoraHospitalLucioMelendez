'use client'
import { useState } from 'react'
import { getSignResponse, imageUploader } from '../services/getSignResponse'

export default function useImageUploader() {
	const [imageURI, setUploadedImage] = useState(null)
	const [error, setError] = useState(null)

	async function uploadImage({ file, folder }) {
		try {
			const signData = await getSignResponse({ folder })
			const data = await imageUploader({ file, signData })

			setUploadedImage(data)
		} catch (error) {
			setError('Ocurrió un error al cargar la imagen: ' + error.message)
		}
	}

	return { uploadImage, imageURI, error }
}
