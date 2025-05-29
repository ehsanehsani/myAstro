// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ehsanehsani.github.io/myAstro/', // this will match your GitHub Pages URL
	base: '/myAstro/',
	output: 'static',
	integrations: [mdx(), sitemap()],
});
