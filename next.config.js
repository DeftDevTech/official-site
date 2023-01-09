const path = require('path');
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')]
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
};
