#!/usr/bin/env node

const { getBanner, getPS1, getRandomGreeting } = require("../index");

const args = process.argv.slice(2);
const command = args[0] || "banner";

switch (command) {
  case "banner":
    console.log(getBanner());
    console.log("  " + getRandomGreeting());
    console.log();
    break;
  case "ps1":
    process.stdout.write(getPS1());
    break;
  case "install":
    console.log("Add this to your .bashrc or .zshrc:\n");
    console.log(`  eval "$(npx retroshell ps1)"`);
    console.log("\nRestart your terminal to enter the grid.");
    break;
  default:
    console.log("Usage: retroshell [banner|ps1|install]");
}
