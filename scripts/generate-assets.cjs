const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const source = path.join(root, "assets", "logo.svg");
const icon = path.join(root, "assets", "icon.png");
const iconOnly = path.join(root, "assets", "icon-only.png");

async function generate() {
  await sharp(source).resize(1024, 1024).png().toFile(icon);
  fs.copyFileSync(icon, iconOnly);
  console.log("FR StorePilot icons generated.");
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
