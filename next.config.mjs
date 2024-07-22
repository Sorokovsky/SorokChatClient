/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API: process.env.API
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
            {
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;
