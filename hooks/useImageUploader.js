'use client'
import { useState } from 'react'
import { getSignResponse, imageUploader } from '../services/getSignResponse'

export default function useImageUploader() {
	const [imageURI, setUploadedImage] = useState(null)

	async function uploadImage({ file, folder }) {
		try {
			const signData = await getSignResponse({ folder })
			const data = await imageUploader({ file, signData })

			await setUploadedImage(data.secure_url)
		} catch (error) {
			throw new Error(error)
		}
	}

	return { uploadImage, imageURI }
}
