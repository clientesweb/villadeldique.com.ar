/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

