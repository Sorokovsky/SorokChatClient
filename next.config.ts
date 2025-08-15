import type { NextConfig } from "next";
import { API, SERVER_URL } from './src/constants/api.constant';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: `/${API}/:path*`,
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Дозволяє всі джерела
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Authorization, Content-Type",
          }, // Включає Authorization для JWT
          { key: "Access-Control-Allow-Credentials", value: "true" }, // Якщо потрібна передача credentials
        ],
      },
    ];
  }, 
  async rewrites() {
    return [
      {
        source: `${API}/:path*`,
        destination: `${SERVER_URL}/:path*`,
      }
    ];
  }
};

export default nextConfig;
