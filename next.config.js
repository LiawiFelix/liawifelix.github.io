/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = undefined;
let basePath = "";

if (isGithubActions) {
  assetPrefix = `/liawifelix.github.io/`;
  basePath = `/liawifelix.github.io`;
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
