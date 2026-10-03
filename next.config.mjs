/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'diamante-rosa-palace.minas-gerais-hotels.com', pathname: '/data/Images/OriginalPhoto/**' }],
  },
};
export default nextConfig;
