/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Skill First Learn',
    description: 'Official registry for Skillfirst Learn Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://skillfirstlearn.github.io/kasm-registry/',
    contactUrl: 'https://github.com/skillfirstlearn/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
