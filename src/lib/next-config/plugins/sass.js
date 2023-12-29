const path = require('path');
const { create } = require('sass-alias');

/**
 * @param {import('next').NextConfig} nextConfig
 */
 const sassPlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
      sassOptions: {
        importer: create({
          '@sass': path.join(__dirname, '../../../assets', 'sass'),
          '@fontawesome': path.join(__dirname, '../../../../node_modules', 'font-awesome'),
        }),
      },
    });
};

module.exports = sassPlugin;
