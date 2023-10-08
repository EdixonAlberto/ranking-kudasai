const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve('src', 'scss')],
    prependData: `@use "~/scss/global.scss" as *;`
  }
};

module.exports = nextConfig;
