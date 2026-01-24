/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Novuslab',
    description: 'Custom workspaces for development.',
    icon: '/img/logo.svg',
    listUrl: 'https://harunkilic.github.io/kasm-registry/',
    contactUrl: 'https://github.com/HarunKilic/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
