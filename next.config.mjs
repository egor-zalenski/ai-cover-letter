/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly define trailing slash behavior
  trailingSlash: false,
  // Use proper route handling
  skipTrailingSlashRedirect: true,
  // Ensure dynamic route segments are properly escaped in output
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
};

export default nextConfig;