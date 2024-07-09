export async function getNews({ all } = false) {
	const response = await fetch(`/api/news?all=${all}`)
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const { data } = await response.json()
	return data
}

export async function addNewsRequest(news) {
	const response = await fetch('/api/news', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(news),
	})
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const { data } = await response.json()
	return data
}

export async function deleteNewsRequest(id) {
	const response = await fetch(`/api/news/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const { data } = await response.json()
	return data
}

export async function updateNewsRequest(news) {
	const response = await fetch(`/api/news/${news.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(news),
	})
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const { data } = await response.json()
	return data
}
