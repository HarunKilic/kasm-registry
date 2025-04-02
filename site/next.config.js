/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Novuslab',
    description: 'Custom workspaces for development.',
    icon: '/img/logo.svg',
    listUrl: 'https://harunkilic.github.io/kasm-registry/',
    contactUrl: 'https://github.com/HarunKilic/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
