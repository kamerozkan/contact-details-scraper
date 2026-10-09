"""Run contact-details-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'websites': ['apify.com', 'https://www.python.org', 'haribo.com', 'moz.com', 'ritter-sport.de'],
 'maxPagesPerSite': 4,
 'maxItems': 100}
run = client.actor("kamerozkan/contact-details-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
