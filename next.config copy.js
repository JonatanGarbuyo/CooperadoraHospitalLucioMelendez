const ContentSecurityPolicy = `
   default-src 'self';
   img-src 'self' data:;
  //  script-src 'self' ;
   connect-src 'self' vitals.vercel-insights.com ;
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
}
