/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly define trailing slash behavior
  trailingSlash: false,
  // Use proper route handling
  skipTrailingSlashRedirect: true,
  // Ensure dynamic route segments are properly escaped in output
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      topLevelImportPaths: [
        '@emotion/styled',
        '@emotion/styled-base',
        'styled-components',
        'styled-components/no-tags',
        'styled-components/native',
        'styled-components/primitives',
      ],
    },
  },
  env: {
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
};

export default nextConfig;