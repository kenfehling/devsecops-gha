/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // GitHub Pages only supports using export
  distDir: 'out',
}

module.exports = nextConfig
