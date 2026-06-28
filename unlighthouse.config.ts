import { defineConfig } from 'unlighthouse';

export default defineConfig({
  site: 'http://localhost:3000',
  scanner: {
    throttle: true,
    device: 'desktop',
  },
  lighthouseOptions: {
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  },
});
