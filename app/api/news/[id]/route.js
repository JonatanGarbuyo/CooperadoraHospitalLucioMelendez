// eslint-disable-next-line no-unused-vars
import { NextRequest, NextResponse } from 'next/server'
import { deleteNews, updateNews } from '../../../../services/news'
import { validateUser } from '../../../../lib/user'
import { validateRequest } from '../../../../lib/request'
import { newsSchema } from '../schema'

/**
 * Handles the POST request for adding news.
 * @param {NextRequest} req - The request object.
 * @returns {NextResponse} The response object.
 */
export async function DELETE(req, { params }) {
	try {
		const id = Number(params.id)
		await validateUser(req)
		await deleteNews(id)
		return NextResponse.json({ message: 'Resource deleted successfully' })
	} catch (ex) {
		return NextResponse.json({ message: ex.message }, { status: ex.statusCode })
	}
}

export async function PUT(req, { params }) {
	try {
		const id = Number(params.id)
		await validateUser(req)
		const data = await validateRequest(req, newsSchema)
		const updatedNews = await updateNews({ newsId: id, data })
		return NextResponse.json({ data: updatedNews }, { status: 200 })
	} catch (ex) {
		return NextResponse.json(
			{ message: ex.message, errors: ex.errors },
			{ status: ex.statusCode }
		)
	}
}
