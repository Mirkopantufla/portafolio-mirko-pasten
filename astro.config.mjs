import { defineConfig, envField } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  experimental: {
    env: {
      schema: {
        EMAILJS_SERVICE: envField.string({ context: "client", access: "public"}),
        EMAILJS_TEMPLATE: envField.string({ context: "client", access: "public"})
      }
    }
  }
});