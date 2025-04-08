import type { NextConfig } from "next";  

const nextConfig: NextConfig = {  
  images: {  
    remotePatterns: [  
      {  
        protocol: "https",  
        hostname: "images.unsplash.com",  
      },  
      {  
        protocol: "https",  
        hostname: "preview.redd.it", // Agrega esta línea  
      },  
    ],  
  },  
};  

export default nextConfig;  