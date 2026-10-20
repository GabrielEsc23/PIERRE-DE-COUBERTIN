import sharp from 'sharp';
import fs from 'fs';

async function main() {
  console.log('Starting logos optimization...');

  // 1. Process udla.png: trim massive transparent margins, add modest padding
  await sharp('./src/assets/images/alliances/udla.png')
    .trim()
    .extend({ top: 16, bottom: 16, left: 20, right: 20, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('./src/assets/images/alliances/udla.png.tmp');
  fs.renameSync('./src/assets/images/alliances/udla.png.tmp', './src/assets/images/alliances/udla.png');
  console.log('✓ udla.png trimmed and centered');

  // 2. Process scouts.png: mask white corners outside circle to transparent alpha
  const maskSvg = Buffer.from(
    `<svg width="360" height="360"><circle cx="180" cy="180" r="179" fill="white" /></svg>`
  );
  await sharp('./src/assets/images/alliances/scouts.png')
    .ensureAlpha()
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toFile('./src/assets/images/alliances/scouts.png.tmp');
  fs.renameSync('./src/assets/images/alliances/scouts.png.tmp', './src/assets/images/alliances/scouts.png');
  console.log('✓ scouts.png circular alpha mask applied');

  // 3. Process alianza_francesa.png: trim transparent margins, add modest padding
  await sharp('./src/assets/images/alliances/alianza_francesa.png')
    .trim()
    .extend({ top: 14, bottom: 14, left: 14, right: 14, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('./src/assets/images/alliances/alianza_francesa.png.tmp');
  fs.renameSync('./src/assets/images/alliances/alianza_francesa.png.tmp', './src/assets/images/alliances/alianza_francesa.png');
  console.log('✓ alianza_francesa.png trimmed');

  // 4. Process toefl.png: trim white border to eliminate large vertical whitespace
  await sharp('./src/assets/images/alliances/toefl.png')
    .trim({ background: '#ffffff', threshold: 10 })
    .extend({ top: 18, bottom: 18, left: 24, right: 24, background: '#ffffff' })
    .png()
    .toFile('./src/assets/images/alliances/toefl.png.tmp');
  fs.renameSync('./src/assets/images/alliances/toefl.png.tmp', './src/assets/images/alliances/toefl.png');
  console.log('✓ toefl.png trimmed and padded');

  // 5. Process uide.png: trim white border to balance proportions
  await sharp('./src/assets/images/alliances/uide.png')
    .trim({ background: '#ffffff', threshold: 10 })
    .extend({ top: 16, bottom: 16, left: 24, right: 24, background: '#ffffff' })
    .png()
    .toFile('./src/assets/images/alliances/uide.png.tmp');
  fs.renameSync('./src/assets/images/alliances/uide.png.tmp', './src/assets/images/alliances/uide.png');
  console.log('✓ uide.png trimmed and padded');

  // 6. Print final dimensions
  const files = ['alianza_francesa.png', 'scouts.png', 'toefl.png', 'uce.png', 'udla.png', 'uide.png'];
  for (const f of files) {
    const meta = await sharp('./src/assets/images/alliances/' + f).metadata();
    console.log(f, '=>', meta.width, 'x', meta.height, 'alpha:', meta.hasAlpha);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
