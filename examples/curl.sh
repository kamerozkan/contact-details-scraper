#!/usr/bin/env bash
# Run contact-details-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~contact-details-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"websites": ["apify.com", "https://www.python.org", "haribo.com", "moz.com", "ritter-sport.de"], "maxPagesPerSite": 4, "maxItems": 100}'
