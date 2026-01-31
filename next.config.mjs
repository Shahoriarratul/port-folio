/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Disable React DevTools in production to avoid module initialization issues
      config.resolve.alias = {
        ...config.resolve.alias,
        'react/jsx-runtime.js': 'react/jsx-runtime',
      };
    }
    return config;
  },
};

export default nextConfig;
