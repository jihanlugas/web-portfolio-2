/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // providing the locales supported by your application
    locales: ['en', 'id', 'jp'],
    //  default locale used when the non-locale paths are visited
    defaultLocale: 'en',
  },
  images: {
    domains: ['picsum.photos']
  },
}

module.exports = nextConfig
