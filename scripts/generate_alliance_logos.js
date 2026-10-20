import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/assets/images/alliances');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. TOEFL Logo SVG
const toeflSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" width="1080" height="320">
  <defs>
    <linearGradient id="toeflGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#006699" />
      <stop offset="100%" stop-color="#003366" />
    </linearGradient>
    <linearGradient id="cyanArc" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00A3E0" />
      <stop offset="100%" stop-color="#00D2C4" />
    </linearGradient>
  </defs>
  <rect x="8" y="8" width="524" height="144" rx="24" fill="#ffffff" />
  <path d="M 50 36 Q 140 18 240 32" stroke="url(#cyanArc)" stroke-width="8" stroke-linecap="round" fill="none" />
  <text x="65" y="100" font-family="'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="64" fill="url(#toeflGrad)" letter-spacing="3">TOEFL</text>
  <text x="68" y="128" font-family="'Arial', sans-serif" font-weight="700" font-size="14" fill="#555555" letter-spacing="3">ETS · ENGLISH CERTIFICATION</text>
</svg>
`;

// 2. SCOUTS Logo SVG
const scoutsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" width="1080" height="320">
  <rect x="8" y="8" width="524" height="144" rx="24" fill="#ffffff" />
  
  <g transform="translate(35, 18)">
    <circle cx="62" cy="62" r="54" fill="#4D2377" />
    <circle cx="62" cy="62" r="49" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="5 3" />
    <path d="M 62 25 C 62 38 52 48 52 64 C 52 74 59 78 62 88 C 65 78 72 74 72 64 C 72 48 62 38 62 25 Z" fill="#ffffff" />
    <path d="M 51 58 C 40 47 31 54 34 66 C 36 73 43 75 52 78 C 50 70 50 64 51 58 Z" fill="#ffffff" />
    <path d="M 73 58 C 84 47 93 54 90 66 C 88 73 81 75 72 78 C 74 70 74 64 73 58 Z" fill="#ffffff" />
    <rect x="46" y="77" width="32" height="5" rx="2" fill="#ffffff" />
    <circle cx="41" cy="62" r="2.5" fill="#4D2377" />
    <circle cx="83" cy="62" r="2.5" fill="#4D2377" />
    <ellipse cx="62" cy="110" rx="7" ry="3.5" fill="none" stroke="#ffffff" stroke-width="2" />
  </g>
  
  <text x="175" y="88" font-family="'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="52" fill="#4D2377" letter-spacing="2">SCOUTS</text>
  <text x="178" y="118" font-family="'Arial', sans-serif" font-weight="700" font-size="13" fill="#D9531E" letter-spacing="2">CONSTRUIR UN MUNDO MEJOR</text>
</svg>
`;

// 3. ALIANZA FRANCESA SVG
const alianzaFrancesaSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" width="1080" height="320">
  <rect x="8" y="8" width="524" height="144" rx="24" fill="#ffffff" />
  
  <g transform="translate(35, 20)">
    <circle cx="58" cy="58" r="48" fill="#E11D48" opacity="0.1" />
    <text x="22" y="82" font-family="'Georgia', serif" font-weight="bold" font-style="italic" font-size="78" fill="#1E3A8A">a</text>
    <text x="62" y="72" font-family="'Georgia', serif" font-weight="bold" font-style="italic" font-size="84" fill="#E11D48">f</text>
  </g>
  
  <text x="175" y="80" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="36" fill="#0F172A" letter-spacing="1">Alianza Francesa</text>
  <text x="177" y="112" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="600" font-size="16" fill="#E11D48" letter-spacing="2.5">ECUADOR · QUITO</text>
</svg>
`;

// 4. UDLA SVG
const udlaSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" width="1080" height="320">
  <defs>
    <linearGradient id="udlaRed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C8102E" />
      <stop offset="100%" stop-color="#9B111E" />
    </linearGradient>
  </defs>
  <rect x="8" y="8" width="524" height="144" rx="24" fill="#ffffff" />
  
  <g transform="translate(40, 32)">
    <rect x="0" y="0" width="94" height="94" rx="16" fill="url(#udlaRed)" />
    <path d="M 18 24 L 76 24 L 76 52 C 76 70 47 80 47 80 C 47 80 18 70 18 52 Z" fill="#ffffff" opacity="0.95" />
    <text x="30" y="62" font-family="'Arial Black', sans-serif" font-weight="900" font-size="26" fill="#C8102E">U</text>
  </g>
  
  <text x="165" y="88" font-family="'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="58" fill="url(#udlaRed)" letter-spacing="2">UDLA</text>
  <text x="168" y="118" font-family="'Arial', sans-serif" font-weight="700" font-size="13.5" fill="#333333" letter-spacing="1.5">UNIVERSIDAD DE LAS AMÉRICAS</text>
</svg>
`;

// 5. UCE SVG
const uceSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" width="1080" height="320">
  <defs>
    <linearGradient id="uceGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA771C" />
    </linearGradient>
    <linearGradient id="uceBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#003366" />
      <stop offset="100%" stop-color="#001F3F" />
    </linearGradient>
  </defs>
  <rect x="8" y="8" width="524" height="144" rx="24" fill="#ffffff" />
  
  <g transform="translate(35, 24)">
    <ellipse cx="55" cy="55" rx="52" ry="52" fill="none" stroke="url(#uceGold)" stroke-width="5" />
    <ellipse cx="55" cy="55" rx="44" ry="44" fill="url(#uceBlue)" />
    <circle cx="55" cy="55" r="16" fill="url(#uceGold)" />
    <path d="M 55 26 L 55 33 M 55 77 L 55 84 M 26 55 L 33 55 M 77 55 L 84 55 M 35 35 L 40 40 M 70 70 L 75 75 M 35 75 L 40 70 M 70 40 L 75 35" stroke="url(#uceGold)" stroke-width="3.5" stroke-linecap="round" />
    <text x="40" y="61" font-family="'Georgia', serif" font-weight="bold" font-size="16" fill="#ffffff">UCE</text>
  </g>
  
  <text x="165" y="80" font-family="'Georgia', serif" font-weight="bold" font-size="40" fill="url(#uceBlue)" letter-spacing="1.5">U. CENTRAL</text>
  <text x="167" y="112" font-family="'Arial', sans-serif" font-weight="700" font-size="13" fill="#AA771C" letter-spacing="1.5">DEL ECUADOR · FUNDADA 1651</text>
</svg>
`;

// 6. UDIE / UIDE SVG
const udieSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" width="1080" height="320">
  <defs>
    <linearGradient id="uideBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F2B5C" />
      <stop offset="100%" stop-color="#1E40AF" />
    </linearGradient>
    <linearGradient id="uideGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>
  <rect x="8" y="8" width="524" height="144" rx="24" fill="#ffffff" />
  
  <g transform="translate(40, 26)">
    <rect x="6" y="6" width="94" height="94" rx="18" fill="url(#uideBlue)" />
    <path d="M 53 24 C 38 40 35 56 41 68 C 45 74 53 80 53 80 C 53 80 61 74 65 68 C 71 56 68 40 53 24 Z" fill="url(#uideGold)" />
    <path d="M 53 45 C 48 54 48 61 53 66 C 58 61 58 54 53 45 Z" fill="#ffffff" />
  </g>
  
  <text x="165" y="86" font-family="'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="52" fill="url(#uideBlue)" letter-spacing="2">UDIE</text>
  <text x="168" y="116" font-family="'Arial', sans-serif" font-weight="700" font-size="13" fill="#B45309" letter-spacing="1.5">UNIVERSIDAD INTERNACIONAL</text>
</svg>
`;

async function generateLogos() {
  const logos = [
    { name: 'toefl.png', svg: toeflSvg },
    { name: 'scouts.png', svg: scoutsSvg },
    { name: 'alianza_francesa.png', svg: alianzaFrancesaSvg },
    { name: 'udla.png', svg: udlaSvg },
    { name: 'uce.png', svg: uceSvg },
    { name: 'udie.png', svg: udieSvg }
  ];

  for (const item of logos) {
    const filePath = path.join(outDir, item.name);
    await sharp(Buffer.from(item.svg))
      .png({ compressionLevel: 9, quality: 100 })
      .toFile(filePath);
    console.log(`✓ Re-generated ${item.name}`);
  }
}

generateLogos()
  .then(() => console.log('All alliance PNG logos updated cleanly!'))
  .catch(err => {
    console.error('Error generating logos:', err);
    process.exit(1);
  });
