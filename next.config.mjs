const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export settings for GitHub Pages
  ...(isGithubActions && {
    output: 'export',
    trailingSlash: true,
    basePath: '/my_portfolio',
    assetPrefix: '/my_portfolio/',
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;