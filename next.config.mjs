/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Set explicit base path for GitHub Pages
  basePath: '/my_portfolio',
  assetPrefix: '/my_portfolio/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Required for static export to GitHub Pages
//   output: 'export',
  
//   // Set the subpath ONLY when building on GitHub Actions
//   basePath: isGithubActions ? '/my_protfolio' : '',
//   assetPrefix: isGithubActions ? '/my_protfolio/' : '',

//   images: {
//     // Required for static HTML exports
//     unoptimized: true,
//   },
// };

// export default nextConfig;
