'use server'
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
		// TODO: add proper error handlings
		throw new ErrorObject({
			message: 'Error connecting to database',
			code: 500,
			errors: [error],
		})
	}
}
