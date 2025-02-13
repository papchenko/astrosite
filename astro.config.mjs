import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
    // site: 'https://papchenko.github.io',
    // base: 'astrosite',
    site: 'https://astrosite-4v23.vercel.app/',
    

    output: 'server',
    adapter: vercel(),
});
