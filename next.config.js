const path = require('path')

// /** @type {(s: string) => string} */
// const relativePath = (file) => path.join(__dirname, file);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve('styles')],
  },
  webpack: config => {
    config.resolve.alias['@'] = path.resolve('src');
    config.resolve.alias['@styles'] = path.resolve('styles');

    return config;
  },
};

module.exports = nextConfig;
