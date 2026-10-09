// Run contact-details-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "websites": [
    "apify.com",
    "https://www.python.org",
    "haribo.com",
    "moz.com",
    "ritter-sport.de"
  ],
  "maxPagesPerSite": 4,
  "maxItems": 100
};
const run = await client.actor('kamerozkan/contact-details-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
