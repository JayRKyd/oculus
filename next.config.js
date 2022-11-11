/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/Homepage',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
