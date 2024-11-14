/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3002",
      },
      {
        protocol: "http",
        hostname: "10.193.236.56",
        port: "3002",
      },
      {
        protocol: "http",
        hostname: "10.193.236.56",
        port: "8080",
      },
    ],
  },
};

export default nextConfig;
