import { ErrorObject } from '../lib/error'
import prisma from '../lib/prisma'

/**
 * @typedef {Object} News
 * @property {string} title
 * @property {string} imageUrl
 * @property {string} description
 * @property {string} authorId
 */

/**
 * @typedef {Object} AddedNews
 * @property {string} id
 * @property {string} title
 * @property {string} imageUrl
 * @property {string} description
 * @property {boolean} published
 * @property {string} authorId
 * @property {string} createdAt
 */

/**
 * Adds a News to the database.
 * @param {News} data - The News object to be added.
 * @returns {Promise<AddedNews>} - A promise that resolves to the added News object.
 * @throws {ErrorObject} - Throws an error if there's a problem with the request to the database.
 */
export async function addNews(data) {
	try {
		const { id, title, imageUrl, description, published, authorId, createdAt } =
			await prisma.news.create({ data })

		return {
			id,
			title,
			imageUrl,
			description,
			published,
			authorId,
			createdAt,
		}
	} catch (error) {
		throw new ErrorObject({
			message: 'An error occurred while processing the request.',
		})
	}
}

/**
 * Deletes a news item from the database.
 * @param {number} id - The ID of the news item to delete.
 * @returns {Promise<void>} - A promise that resolves when the news item is deleted.
 * @throws {ErrorObject} - Throws an error if there's a problem with the database connection or if the record to delete does not exist.
 */
export async function deleteNews(id) {
	try {
		return await prisma.news.delete({ where: { id } })
	} catch (ex) {
		const error = new ErrorObject({
			message: 'An error occurred while processing the request.',
		})

		if (ex.code === 'P2025') {
			error.message = 'Resource to delete does not exist.'
			error.statusCode = 404
		}
		throw error
	}
}
