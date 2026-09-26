import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GranjaFlow",
    short_name: "GranjaFlow",
    description: "Gestão inteligente e integrada para granjas",
    start_url: "/",
    display: "standalone",
    background_color: "#f7faff",
    theme_color: "#073873",
    icons: [
      { src: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
