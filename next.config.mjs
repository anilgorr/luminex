/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // Keep old .php URLs working after the switch so existing Google rankings carry over.
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/about.php", destination: "/about", permanent: true },
      { source: "/windows.php", destination: "/windows", permanent: true },
      { source: "/doors.php", destination: "/doors", permanent: true },
      { source: "/renovations.php", destination: "/renovations", permanent: true },
      { source: "/gallery.php", destination: "/gallery", permanent: true },
      { source: "/luminex-difference.php", destination: "/luminex-difference", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/request-quote.php", destination: "/request-quote", permanent: true },
      { source: "/services.php", destination: "/windows", permanent: true },
      { source: "/blog.php", destination: "/blog", permanent: true },
      { source: "/blog-single.php", destination: "/blog", permanent: true },
    ];
  },
};
export default nextConfig;
