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

// Check if the host has a subdomain
var count = (host.match(/is/g) || []).length;
let domain;

switch (count) {
  case 2:
    // Strip subdomain
    domain = host.substring(host.indexOf(".") + 1);

    break;
  case 1:
    // No subdomain
    domain = host;
    break;
  default:
    console.error(
      `${host} does not look like a valid domain. Did you mistype it?`
    );
    process.exit(-1);
    break;
}

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
