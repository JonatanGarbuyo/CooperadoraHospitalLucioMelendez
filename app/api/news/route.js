// eslint-disable-next-line no-unused-vars
import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { newsSchema } from './schema'
import { addNews } from '../../../services/news'
import { validateUser } from '../../../lib/user'
import { validateRequest } from '../../../lib/request'

/**
 * Handles the GET request for retrieving news data.
 * @returns {NextResponse} The response object containing the news data.
 */
export async function GET() {
	const data = await prisma.news.findMany()
	return NextResponse.json({ data })
}

/**
 * Handles the POST request for adding news.
 * @param {NextRequest} req - The request object.
 * @returns {NextResponse} The response object.
 */
export async function POST(req) {
	try {
		const { userId } = await validateUser(req)
		const validatedNews = await validateRequest(req, newsSchema)
		validatedNews.authorId = userId
		const news = await addNews(validatedNews)
		return NextResponse.json({ data: news }, { status: 201 })
	} catch (ex) {
		return NextResponse.json(
			{ message: ex.message, errors: ex.errors },
			{ status: ex.statusCode }
		)
	}
}