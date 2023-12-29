/**
 * @param {import('next').NextConfig} nextConfig
 */
const localeRedirects = (nextConfig = {}) => {
  return {
    ...nextConfig,
    async redirects() {
      return [
        ...(await nextConfig.redirects()),
        //virtual folders
        { source: '/au', destination: '/en-au', permanent: true },
        { source: '/au/:path*', destination: '/en-au/:path*', permanent: true },
        { source: '/ca', destination: '/en-ca', permanent: true },
        { source: '/ca/en', destination: '/en-ca', permanent: true },
        {
          source: '/ca/en/:path*',
          destination: '/en-ca/:path*',
          permanent: true,
        },
        { source: '/uk', destination: '/en-gb', permanent: true },
        { source: '/uk/:path*', destination: '/en-gb/:path*', permanent: true },
        { source: '/ls', destination: '/en-ls', permanent: true },
        { source: '/ls/:path*', destination: '/en-ls/:path*', permanent: true },
        { source: '/nl', destination: '/nl-nl', permanent: true },
        { source: '/nl/:path*', destination: '/nl-nl/:path*', permanent: true },
        { source: '/mx', destination: '/es-mx', permanent: true },
        { source: '/mx/:path*', destination: '/es-mx/:path*', permanent: true },
        { source: '/es', destination: '/es-es', permanent: true },
        { source: '/es/:path*', destination: '/es-es/:path*', permanent: true },
        { source: '/tr', destination: '/tr-tr', permanent: true },
        { source: '/tr/:path*', destination: '/tr-tr/:path*', permanent: true },
        { source: '/ae', destination: '/en-ae', permanent: true },
        { source: '/ae/en', destination: '/en-ae', permanent: true },
        {
          source: '/ae/en/:path*',
          destination: '/en-ae/:path*',
          permanent: true,
        },
        { source: '/ae/ar', destination: '/ar-ae', permanent: true },
        {
          source: '/ae/ar/:path*',
          destination: '/ar-ae/:path*',
          permanent: true,
        },
        { source: '/br', destination: '/pt-br', permanent: true },
        { source: '/br/:path*', destination: '/pt-br/:path*', permanent: true },
        { source: '/de', destination: '/de-de', permanent: true },
        { source: '/de/:path*', destination: '/de-de/:path*', permanent: true },
        { source: '/ie', destination: '/en-ie', permanent: true },
        { source: '/ie/:path*', destination: '/en-ie/:path*', permanent: true },
        { source: '/nz', destination: '/en-nz', permanent: true },
        { source: '/nz/:path*', destination: '/en-nz/:path*', permanent: true },
        { source: '/sg', destination: '/en-sg', permanent: true },
        { source: '/sg/:path*', destination: '/en-sg/:path*', permanent: true },
        //Wave 4
        { source: '/ca/fr', destination: '/fr-ca', permanent: true },
        {
          source: '/ca/fr/:path*',
          destination: '/fr-ca/:path*',
          permanent: true,
        },
        { source: '/sa', destination: '/ar-sa', permanent: true },
        { source: '/sa/ar', destination: '/ar-sa', permanent: true },
        {
          source: '/sa/ar/:path*',
          destination: '/ar-sa/:path*',
          permanent: true,
        },
        { source: '/sa/en', destination: '/en-sa', permanent: true },
        {
          source: '/sa/en/:path*',
          destination: '/en-sa/:path*',
          permanent: true,
        },
        { source: '/co', destination: '/es-co', permanent: true },
        { source: '/co/:path*', destination: '/es-co/:path*', permanent: true },
        { source: '/in', destination: '/en-in', permanent: true },
        { source: '/in/:path*', destination: '/en-in/:path*', permanent: true },
        { source: '/fr', destination: '/fr-fr', permanent: true },
        { source: '/fr/:path*', destination: '/fr-fr/:path*', permanent: true },
        { source: '/ro', destination: '/ro-ro', permanent: true },
        { source: '/ro/:path*', destination: '/ro-ro/:path*', permanent: true },
        //Wave 5
        { source: '/gr', destination: '/el-gr', permanent: true },
        { source: '/gr/:path*', destination: '/el-gr/:path*', permanent: true },
        { source: '/at', destination: '/de-at', permanent: true },
        { source: '/at/:path*', destination: '/de-at/:path*', permanent: true },
        { source: '/zh', destination: '/zh-cn', permanent: true },
        { source: '/zh/:path*', destination: '/zh-cn/:path*', permanent: true },
        { source: '/cl', destination: '/es-cl', permanent: true },
        { source: '/cl/:path*', destination: '/es-cl/:path*', permanent: true },
        { source: '/eg', destination: '/ar-eg', permanent: true },
        { source: '/eg/ar', destination: '/ar-eg', permanent: true },
        {
          source: '/eg/ar/:path*',
          destination: '/ar-eg/:path*',
          permanent: true,
        },
        { source: '/eg/en', destination: '/en-eg', permanent: true },
        {
          source: '/eg/en/:path*',
          destination: '/en-eg/:path*',
          permanent: true,
        },
        { source: '/ch', destination: '/de-ch', permanent: true },
        { source: '/ch/de', destination: '/de-ch', permanent: true },
        {
          source: '/ch/de/:path*',
          destination: '/de-ch/:path*',
          permanent: true,
        },
        { source: '/ch/en', destination: '/en-ch', permanent: true },
        {
          source: '/ch/en/:path*',
          destination: '/en-ch/:path*',
          permanent: true,
        },
        { source: '/ch/fr', destination: '/fr-ch', permanent: true },
        {
          source: '/ch/fr/:path*',
          destination: '/fr-ch/:path*',
          permanent: true,
        },
        { source: '/kw', destination: '/ar-kw', permanent: true },
        { source: '/kw/ar', destination: '/ar-kw', permanent: true },
        {
          source: '/kw/ar/:path*',
          destination: '/ar-kw/:path*',
          permanent: true,
        },
        { source: '/kw/en', destination: '/en-kw', permanent: true },
        {
          source: '/kw/en/:path*',
          destination: '/en-kw/:path*',
          permanent: true,
        },
      ];
    },
  };
};

module.exports = localeRedirects;
