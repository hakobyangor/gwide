// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  env: {
    API_HOST: process.env.API_HOST
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  swcMinify: true,
  images: {
    domains: ['cdn.pixabay.com']
  }
}

module.exports = withNx(nextConfig)
