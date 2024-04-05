// eslint-disable-next-line no-unused-vars
import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { newsSchema } from '../../../lib/newsSchema'
import { addNews } from '../../../services/news'
import { validateUser } from '../../../lib/user'
import { validateRequest } from '../../../lib/request'

/**
 * Handles the GET request for retrieving news data.
 * @returns {NextResponse} The response object containing the news data.
 */
export async function GET(request) {
	const searchParams = request.nextUrl.searchParams
	const all = searchParams.get('all')

	let data

	if (all === 'true') {
		data = await prisma.news.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		})
	} else {
		data = await prisma.news.findMany({
			where: {
				published: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})
	}

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
