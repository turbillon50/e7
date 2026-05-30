/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep builds resilient for demo/CI: lint is run explicitly, type errors still fail the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Cinematic stills are served from Unsplash's CDN. `unoptimized` keeps the
    // app portable to any host and avoids build-time image fetches.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
