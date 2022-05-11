/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: 'img-src \'self\' data: https://pbs.twimg.com; default-src *; style-src \'self\' \'unsafe-inline\' http://fonts.googleapis.com; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' http://fonts.googleapis.com',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=expireTime',
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
