const sharp = require("sharp");
const path = require("path");

const dir = __dirname;

async function main() {
  await sharp(path.join(dir, "icon.svg"))
    .resize(512, 512)
    .flatten({ background: "#3B82F6" })
    .png()
    .toFile(path.join(dir, "icon-512.png"));

  await sharp(path.join(dir, "feature-graphic.svg"))
    .resize(1024, 500)
    .flatten({ background: "#FFFFFF" })
    .png()
    .toFile(path.join(dir, "feature-graphic-1024x500.png"));

  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
