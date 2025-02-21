/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [], // Eliminamos los dominios externos ya que usaremos imágenes locales
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig

