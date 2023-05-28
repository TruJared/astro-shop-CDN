import { defineConfig, sharpImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  experimental: { assets: true },
  image: {service: sharpImageService()},
  integrations: [tailwind(), react(), prefetch(), image()]
});
