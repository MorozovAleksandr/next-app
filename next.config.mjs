/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'old-images.hb.ru-msk.vkcs.cloud',
                port: '',
                pathname: '/uploads/**',
            },
        ],
    },

};

export default nextConfig;
