/**
 * Entry point for hosts that expect a single JS file to start the app
 * (e.g. cPanel's "Setup Node.js App" / Passenger, which sets process.env.PORT
 * and proxies to it). Equivalent to running `npm run start` (`strapi start`),
 * but as a plain script Passenger can point to directly.
 *
 * Requires `npm run build` to have been run first (creates ./dist).
 */
const path = require('path');
const fs = require('fs');
const { createStrapi } = require('@strapi/strapi');

const appDir = __dirname;
const defaultDist = path.join(appDir, 'dist');
const distDir = fs.existsSync(path.join(defaultDist, 'src', 'index.js')) ? defaultDist : appDir;

createStrapi({ appDir, distDir }).start();
