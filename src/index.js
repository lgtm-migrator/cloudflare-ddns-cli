const CloudflareDDNSSync = require("cloudflare-ddns-sync");

function parseHost(host) {
  // Check if the host has a subdomain
  var count = (host.match(/\./g) || []).length;
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
      throw `${host} does not look like a valid domain. Did you mistype it?`;
      break;
  }

  return domain;
}

function checkForRequiredEnvs(envsList) {
  envsList.forEach(env => {
    if (!process.env[env]) {
      throw `Please set required env: ${env}`;
    }
  });
}

const requiredEnvs = [
  "CLOUDFLARE_EMAIL",
  "CLOUDFLARE_TOKEN",
  "CLOUDFLARE_HOST"
];

function update() {
  checkForRequiredEnvs(requiredEnvs);

  const host = process.env.CLOUDFLARE_HOST;
  const domain = parseHost(host);

  var ddnsSync = new CloudflareDDNSSync({
    auth: {
      email: process.env.CLOUDFLARE_EMAIL,
      key: process.env.CLOUDFLARE_TOKEN
    },
    domain,
    records: [host]
  });

  ddnsSync.sync().then(results => {
    for (var result of results) {
      console.log(result);
    }
  });
}

module.exports = { parseHost, checkForRequiredEnvs, update };
