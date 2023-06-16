import { NextResponse } from 'next/server'
import crypto from 'crypto'

// TODO: this api has to be authenticated
export async function GET(request) {
	const folder = request.nextUrl.searchParams.get('folder') || 'general'

	const apiKey = process.env.CLOUDINARY_API_KEY
	const apiSecret = process.env.CLOUDINARY_API_SECRET
	const cloudname = process.env.CLOUDINARY_CLOUD_NAME
	const uploadPreset = process.env.CLOUDINARY_PRESETs
	// const eager = 'w_400,h_300,c_pad|w_260,h_200,c_crop'
	// const publicId = 'sample_image'
	const timestamp = Math.floor(Date.now() / 1000)

	// a string with the parameters arranged alphabetically
	const sortedParams = `folder=${folder}&timestamp=${timestamp}`
	const stringToSign = sortedParams + apiSecret
	const signature = crypto.createHash('sha1').update(stringToSign).digest('hex')

	return NextResponse.json({
		apiKey,
		cloudname,
		signature,
		uploadPreset,
		timestamp,
		folder,
	})
}
