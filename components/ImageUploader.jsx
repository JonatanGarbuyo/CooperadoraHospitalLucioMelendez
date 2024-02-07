'use client'
import useImageUploader from '@/hooks/useImageUploader'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import Spinner from './Spinner'

export default function ImageUploader({ setNews, imageRef }) {
	const [isLoading, setIsLoading] = useState(false)
	const { uploadImage, imageURI } = useImageUploader()

	useEffect(() => {
		if (imageURI) {
			setNews((prev) => ({ ...prev, imageUrl: imageURI }))
		}
	}, [imageURI, setNews])

	const dropHandler = async (e) => {
		e.preventDefault()
		try {
			setIsLoading(true)
			const file = await e.dataTransfer.files[0]
			await uploadImage({ file, folder: 'general' })
		} catch (error) {
			console.error(error)
			alert(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	const inputHandler = async (e) => {
		try {
			setIsLoading(true)
			const file = await e.target.files[0]
			await uploadImage({ file, folder: 'general' })
		} catch (error) {
			console.error(error)
			alert(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div
			className="relative flex h-[150px] w-[200px] items-center justify-center"
			onDrop={dropHandler}
			onDragOver={(e) => e.preventDefault()}
		>
			<label
				htmlFor="input-file"
				className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-800"
			>
				{isLoading && (
					<div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-50 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-80">
						<Spinner />
					</div>
				)}
				{imageURI ? (
					<Image src={imageURI} alt="Imagen" fill className="object-cover" />
				) : (
					<div className="flex flex-col items-center justify-center">
						<svg
							className="mb-4 h-8 w-8 text-slate-500 dark:text-slate-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 16"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLineJoin="round"
								strokeWidth="2"
								d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
							/>
						</svg>
						<p className="mb-2 text-center text-sm text-slate-500 dark:text-slate-400">
							<span className="font-semibold">Click para subir</span> o arrastra
							y suelta
						</p>
						<p className="text-center text-xs text-slate-500 dark:text-slate-400">
							SVG, PNG, JPG o GIF (MAX. 800x400px)
						</p>
					</div>
				)}

				<input
					id="input-file"
					type="file"
					accept="image/*"
					className="absolute h-1 w-1 opacity-0"
					onChange={inputHandler}
					required
					ref={imageRef}
				/>
			</label>
		</div>
	)
}
