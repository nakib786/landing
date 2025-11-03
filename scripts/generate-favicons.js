import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const faviconSvg = path.join(publicDir, 'favicon.svg');

// Ensure the SVG exists
if (!fs.existsSync(faviconSvg)) {
  console.error('Error: favicon.svg not found in public directory');
  process.exit(1);
}

// Icon sizes to generate
const iconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'pwa-192x192.png' },
  { size: 512, name: 'pwa-512x512.png' },
];

// Generate ICO file (16x16, 32x32, 48x48)
const icoSizes = [16, 32, 48];

async function generateIcons() {
  console.log('Generating favicon files from SVG...\n');

  try {
    // Generate PNG icons
    for (const { size, name } of iconSizes) {
      await sharp(faviconSvg)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, name));
      console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    // Generate ICO file (multi-resolution)
    const icoImages = await Promise.all(
      icoSizes.map(async (size) => {
        const buffer = await sharp(faviconSvg)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png()
          .toBuffer();
        return { size, buffer };
      })
    );

    // Create ICO file with all sizes (simplified - using first size as ICO)
    await sharp(faviconSvg)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');

    // Generate maskable icon (with padding for Android)
    const maskableSize = 512;
    const padding = Math.round(maskableSize * 0.1); // 10% padding, rounded
    const iconSize = maskableSize - padding * 2;
    await sharp({
      create: {
        width: maskableSize,
        height: maskableSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        {
          input: await sharp(faviconSvg)
            .resize(iconSize, iconSize, {
              fit: 'contain',
              background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toBuffer(),
          left: padding,
          top: padding
        }
      ])
      .png()
      .toFile(path.join(publicDir, 'maskable-icon-512x512.png'));
    console.log('✓ Generated maskable-icon-512x512.png (with safe area padding)');

    // Generate smaller PWA icons
    await sharp(faviconSvg)
      .resize(64, 64, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'pwa-64x64.png'));
    console.log('✓ Generated pwa-64x64.png');

    console.log('\n✅ All favicon files generated successfully!');
    console.log('\nGenerated files:');
    iconSizes.forEach(({ name }) => console.log(`  - ${name}`));
    console.log('  - favicon.ico');
    console.log('  - maskable-icon-512x512.png');
    console.log('  - pwa-64x64.png');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();

