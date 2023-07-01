// eslint-disable-next-line no-unused-vars
import { NextRequest, NextResponse } from 'next/server'
import { deleteNews } from '../../../../services/news'
import { validateUser } from '../../../../lib/user'

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
