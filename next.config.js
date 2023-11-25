/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	sassOptions: {
		prependData: `@import "@/assets/styles/variables/index.scss";`
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://dunabechost.beget.app/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://dunabechost.beget.app/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
