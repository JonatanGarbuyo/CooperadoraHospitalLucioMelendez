import ImageUploader from '@/components/ImageUploader'
import { useState, useRef } from 'react'
import Spinner from './Spinner'
import { addNewsRequest, getNews } from '@/lib/newsRequests'
import { newsSchema } from '@/lib/newsSchema'

export default function AddNews({ setAddNewRow, setNewsArray }) {
	const titleRef = useRef()
	const descriptionRef = useRef()
	const imageRef = useRef()
	const [isLoading, setIsLoading] = useState(false)
	const [news, setNews] = useState({
		title: '',
		imageUrl: '',
		description: '',
		published: false,
	})

	const handleSubmit = async () => {
		try {
			if (descriptionRef.current.value.length < 12) {
				descriptionRef.current.setCustomValidity(
					'La descripción debe tener al menos 12 caracteres'
				)
			} else {
				descriptionRef.current.setCustomValidity('')
			}

			titleRef.current.reportValidity()
			descriptionRef.current.reportValidity()
			imageRef.current.reportValidity()
			if (
				!titleRef.current.checkValidity() ||
				!descriptionRef.current.checkValidity()
			)
				return

			setIsLoading(true)
			await newsSchema.validate(news, { abortEarly: false })			
			await addNewsRequest(news)
			const data = await getNews()
			setNewsArray(data)
			setAddNewRow(false)
		} catch (error) {
			console.error(error)
			alert(`Error al cargar la noticia: ${error.message}`)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<tr className="relative">
			<td>
				<ImageUploader setNews={setNews} imageRef={imageRef} />
			</td>
			<td>
				<input
					type="text"
					className="rounded border border-[#ddd] p-2"
					value={news.title}
					onChange={(e) =>
						setNews((prev) => ({ ...prev, title: e.target.value }))
					}
					required
					minLength="4"
					maxLength="32"
					ref={titleRef}
				/>
			</td>
			<td>
				<textarea
					rows={6}
					cols={60}
					className="border-gray-300 textarea-scrollbar rounded border border-[#ddd] pt-2"
					value={news.description}
					onChange={(e) =>
						setNews((prev) => ({ ...prev, description: e.target.value }))
					}
					required
					maxLength="2048"
					ref={descriptionRef}
				/>
			</td>
			<td>
				<select
					name="select"
					value={news.published}
					onChange={(e) =>
						setNews((prev) => ({ ...prev, published: e.target.value }))
					}
				>
					<option value={true}>Publicar</option>
					<option value={false}>No Publicar</option>
				</select>
			</td>
			<td>
				<button
					className="mb-3 w-32 rounded bg-[#009879] px-4 py-2 font-semibold uppercase tracking-wider text-white hover:bg-[#00987ad1]"
					onClick={handleSubmit}
					disabled={isLoading}
				>
					Guardar
				</button>
				<button
					className="w-32 rounded border-2 border-red-600 bg-white px-4 py-2 font-semibold uppercase tracking-wider text-red-600 hover:bg-red-600 hover:text-white"
					onClick={() => setAddNewRow(false)}
					disabled={isLoading}
				>
					Cancelar
				</button>
				{isLoading && (
					<div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-50 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-80">
						<Spinner />
					</div>
				)}
			</td>
		</tr>
	)
}
