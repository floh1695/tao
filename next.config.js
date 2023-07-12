const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve('styles')],
  },
  webpack: config => {
    config.resolve.alias['@'] = path.resolve('src');
    config.resolve.alias['@components'] = path.resolve('src/components');

    config.resolve.alias['@styles'] = path.resolve('styles');

    return config;
  },
};

module.exports = nextConfig;
