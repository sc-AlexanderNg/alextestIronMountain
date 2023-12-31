/* eslint-disable @typescript-eslint/no-var-requires */
const jssConfig = require('./src/temp/config');

const { getPublicUrl } = require('@sitecore-jss/sitecore-jss-nextjs/utils');
const plugins = require('./src/temp/next-config-plugins') || {};

let publicUrl = getPublicUrl();

if (process.env.PUBLIC_URL_OVERRIDE) {
  publicUrl = process.env.PUBLIC_URL_OVERRIDE;
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Set assetPrefix to our public URL
  assetPrefix: publicUrl,

  // Allow specifying a distinct distDir when concurrently running app in a container
  distDir: process.env.NEXTJS_DIST_DIR || '.next',

  // Make the same PUBLIC_URL available as an environment variable on the client bundle
  env: {
    PUBLIC_URL: publicUrl,
    PUBLIC_URL_OVERRIDE: process.env.PUBLIC_URL_OVERRIDE,
  },

  i18n: {
    // These are all the locales you want to support in your application.
    // These should generally match (or at least be a subset of) those in Sitecore.
    locales: [
      'ar-ae',
      'de-de',
      'en',
      'en-ae',
      'en-au',
      'en-ca',
      'en-gb',
      'en-ie',
      'en-ls',
      'en-nz',
      'en-sg',
      'es-es',
      'es-mx',
      'it-it',
      'nl-nl',
      'pt-br',
      'tr-tr',
      'fr-ca',
      'es-co',
      'ar-sa',
      'en-sa',
      'en-in',
      'fr-fr',
      'ro-ro',
      'el-gr',
      'de-at',
      'zh-cn',
      'es-cl',
      'ar-eg',
      'en-eg',
      'en-ch',
      'fr-ch',
      'de-ch',
      'ar-kw',
      'en-kw',
    ],
    // This is the locale that will be used when visiting a non-locale
    // prefixed path e.g. `/styleguide`.
    defaultLocale: jssConfig.defaultLanguage,
    localeDetection: false,
  },

  // Enable React Strict Mode
  reactStrictMode: true,

  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edge.sitecorecloud.io',
        port: '',
        pathname: '**',
      },
    ],
  },

  async rewrites() {
    // When in connected mode we want to proxy Sitecore paths off to Sitecore
    return [
      // API endpoints
      {
        source: '/sitecore/api/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/api/:path*`,
      },
      // media items
      {
        source: '/-/:path*',
        destination: `${jssConfig.sitecoreApiHost}/-/:path*`,
      },
      // healthz check
      {
        source: '/healthz',
        destination: '/api/healthz',
      },
      // rewrite for Sitecore service pages
      {
        source: '/sitecore/service/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/service/:path*`,
      },
    ];
  },
  /* alextest  remove async redirect */

};

module.exports = () => {
  // Run the base config through any configured plugins
  return Object.values(plugins).reduce(
    (acc, plugin) => plugin(acc),
    nextConfig
  );
};
