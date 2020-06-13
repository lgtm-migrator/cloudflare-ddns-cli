[![CircleCI](https://circleci.com/gh/drazisil/cloudflare-ddns-cli.svg?style=shield)](https://circleci.com/gh/drazisil/cloudflare-ddns-cli) [![Greenkeeper badge](https://badges.greenkeeper.io/drazisil/cloudflare-ddns-cli.svg)](https://greenkeeper.io/)

# cloudflare-ddns-cli

A CLI wrapper around [cloudflare-ddns-sync](https://www.npmjs.com/package/cloudflare-ddns-sync) for updating to IP on CloudFlare.

This project is not developed or supported by either the above project or CloudFlare in anyway.

You will need to set the following environmental varibles:

- `CLOUDFLARE_EMAIL` - The email address of your Cloudflare account
- `CLOUDFLARE_TOKEN` - The [API token](https://dash.cloudflare.com/profile) from your Cloudflare account
- `CLOUDFLARE_HOST` - The hostname. Can contain a subdomain, but will fail if more then 2 total periods.

## Installing:

- `sudo npm i -g cloudflare-ddns-cli` or `npx cloudflare-ddns.cli` if you have [npx](https://www.npmjs.com/package/npx) installed.

## Running:

- `cf-update`

.
