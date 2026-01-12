const chalk = require("chalk");

const neonPink = chalk.hex("#FF6EC7");
const neonCyan = chalk.hex("#00FFFF");
const neonPurple = chalk.hex("#BF40BF");
const hotYellow = chalk.hex("#FFD700");

const glyphs = ["\u25B6", "\u25C6", "\u2666", "\u00BB"];

function randomGlyph() {
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

function getPrompt(cwd) {
  const glyph = neonPink(randomGlyph());
  const dir = neonCyan(cwd || process.cwd());
  const arrow = neonPurple("\u00BB");
  return `${glyph} ${dir} ${arrow} `;
}

function getBanner() {
  const lines = [
    neonPink("  ____      _             ____  _          _ _ "),
    neonCyan("  |  _ \\ ___| |_ _ __ ___ / ___|| |__   ___| | |"),
    neonPurple(" | |_) / _ \\ __| '__/ _ \\\\___ \\| '_ \\ / _ \\ | |"),
    hotYellow("  |  _ <  __/ |_| | | (_) |___) | | | |  __/ | |"),
    neonPink("  |_| \\_\\___|\\__|_|  \\___/|____/|_| |_|\\___|_|_|"),
    "",
    neonCyan.bold("  v2.0.1 - Synthwave terminal vibes"),
  ];
  return "\n" + lines.join("\n") + "\n";
}

function getPS1() {
  return `\\[\\033[38;5;206m\\]\u25B6 \\[\\033[38;5;51m\\]\\w \\[\\033[38;5;134m\\]\u00BB\\[\\033[0m\\] `;
}

function getRandomGreeting() {
  const greetings = [
    "Welcome to the grid.",
    "Neon dreams loading...",
    "Insert coin to continue.",
    "System online. Stay radical.",
    "Booting up the time machine...",
  ];
  return neonPurple(greetings[Math.floor(Math.random() * greetings.length)]);
}

module.exports = { getPrompt, getBanner, getPS1, getRandomGreeting };

