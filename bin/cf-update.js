#!/usr/bin/env node

const requiredEnvs = [
  "CLOUDFLARE_EMAIL",
  "CLOUDFLARE_TOKEN",
  "CLOUDFLARE_HOST"
];

requiredEnvs.forEach(env => {
  if (!process.env[env]) {
    console.error(`Please set required env: ${env}`);
    process.exit();
  }
});

var CloudflareDDNSSync = require("cloudflare-ddns-sync");

const host = process.env.CLOUDFLARE_HOST;
const domain = host.substring(host.indexOf(".") + 1);

var ddnsSync = new CloudflareDDNSSync({
  auth: {
    email: process.env.CLOUDFLARE_EMAIL,
    key: process.env.CLOUDFLARE_TOKEN
  },
  domain: domain,
  records: [host]
});

ddnsSync.sync().then(results => {
  for (var result of results) {
    console.log(result);
  }
});
