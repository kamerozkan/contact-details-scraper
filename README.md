# Contact Details Scraper - Emails, Phones & Socials

Extract emails, phone numbers and social profiles (LinkedIn, Facebook, Instagram, X, YouTube) from company websites. One row per website, contact and imprint pages crawled automatically. Pay per website, not per page.

**[Run it on Apify Store](https://apify.com/kamerozkan/contact-details-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/contact-details-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/contact-details-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/contact-details-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "websites": [
    "apify.com",
    "https://www.python.org",
    "haribo.com",
    "moz.com",
    "ritter-sport.de"
  ],
  "maxPagesPerSite": 4,
  "maxItems": 100
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "input": "ritter-sport.de",
    "website": "https://www.ritter-sport.com/de",
    "domain": "ritter-sport.com",
    "companyName": "RITTER SPORT",
    "emails": [
      "contact@example.com"
    ],
    "phones": [
      "+1 555 0100"
    ],
    "linkedin": "https://www.linkedin.com/company/ritter-sport",
    "facebook": "https://www.facebook.com/RitterSportDeutschland",
    "instagram": "https://www.instagram.com/rittersport",
    "twitter": null,
    "youtube": "https://www.youtube.com/user/Rittersport",
    "tiktok": "https://www.tiktok.com/@rittersport_de",
    "pinterest": "https://www.pinterest.com/rittersportde",
    "github": null,
    "xing": null,
    "contactPages": [
      "https://www.ritter-sport.com/de/kontakt",
      "https://www.ritter-sport.com/de/impressum",
      "https://www.ritter-sport.com/de/ueber-uns"
    ],
    "pagesCrawled": 4,
    "scrapedAt": "2026-10-09T19:40:49Z"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/contact-details-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
