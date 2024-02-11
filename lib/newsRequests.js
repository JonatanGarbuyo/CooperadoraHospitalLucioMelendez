export async function getNews() {
	const response = await fetch('http://localhost:3000/api/news')
	console.log(response)
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const { data } = await response.json()
	return data
}
export async function addNewsRequest(news) {
	const response = await fetch('http://localhost:3000/api/news', {
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
	const response = await fetch(`http://localhost:3000/api/news/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const { data } = await response.json()
	return data
}
