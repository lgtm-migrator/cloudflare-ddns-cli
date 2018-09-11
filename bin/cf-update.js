#!/usr/bin/env node

const cfUpdate = require("../src/");

try {
  cfUpdate.update();
} catch (error) {
  console.error(error);
  process.exit(-1);
}
