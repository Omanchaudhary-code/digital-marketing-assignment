const assetCacheControl = "public, max-age=31536000, immutable"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: { exclude: ["error", "warn"] },
  },
  // Removed modularizeImports for lucide-react
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1080, 1366, 1600, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|png|jpg|jpeg|gif|webp|avif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: assetCacheControl,
          },
        ],
      },
      {
        source: "/:all*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: assetCacheControl,
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ]
  },
}

export default nextConfig
