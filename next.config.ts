import type { NextConfig } from "next";

// Xserver（静的ホスティング）向けに out/ へHTMLを書き出す
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
