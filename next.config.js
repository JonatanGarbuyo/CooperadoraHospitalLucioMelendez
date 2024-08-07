const ContentSecurityPolicy = `
   img-src 'self' res.cloudinary.com data:;
   connect-src 'self' vitals.vercel-insights.com api.cloudinary.com ;
   style-src 'self' 'unsafe-inline' ;
   font-src 'self' ;  
 `

const securityHeaders = () => [
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
	},
]

module.exports = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders(),
			},
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				port: '',
			},
		],
	},
}
