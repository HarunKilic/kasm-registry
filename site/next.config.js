/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Novuslab',
    description: 'Custom workspaces for development.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/HarunKilic/kasm-registry/',
    contactUrl: 'https://github.com/HarunKilic/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
