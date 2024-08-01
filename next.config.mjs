/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler:{
    styledComponents:{
      ssr:true,
      displayName:true
    }
  },
  images: {
    domains: [ "cdn.sanity.io" ]
  }
};

export default nextConfig;
