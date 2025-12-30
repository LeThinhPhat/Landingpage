/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "www.ups.com" },
      { protocol: "https", hostname: "www.dhl.com" },
      { protocol: "https", hostname: "jtexpress.vn" },
      { protocol: "https", hostname: "vnpost.vn" },
      { protocol: "https", hostname: "www.vietbank.com.vn" },
      { protocol: "https", hostname: "techcombank.com" },
      { protocol: "https", hostname: "theme.hstatic.net" },
      { protocol: "https", hostname: "ghtk.vn" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.japan-guide.com" },
      { protocol: "https", hostname: "lingvist.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "media.vietravel.com" },
      { protocol: "https", hostname: "migrationology.com" },
      { protocol: "https", hostname: "i.guim.co.uk" },
    ],
  },
};

module.exports = nextConfig;
