/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['eldoraui.site', "media.licdn.com"], // Add 'github.com' to the list of allowed image domains
  },
};

export default nextConfig;
