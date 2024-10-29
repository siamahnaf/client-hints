/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*', // Apply to all paths
                headers: [
                    {
                        key: 'Accept-CH',
                        value: 'Sec-CH-Prefers-Color-Scheme',
                    },
                ],
            },
        ];
    }
};

export default nextConfig;
