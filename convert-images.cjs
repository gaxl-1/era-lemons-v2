const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
const processedImages = [];

async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 85 })
            .toFile(outputPath);
        console.log(`✓ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
        processedImages.push({
            original: inputPath,
            webp: outputPath
        });
    } catch (err) {
        console.error(`✗ Error converting ${inputPath}:`, err.message);
    }
}

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            const relativePath = path.relative(assetsDir, fullPath);
            const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            await convertToWebP(fullPath, outputPath);
        }
    }
}

(async () => {
    console.log('🔧 Starting image optimization...\n');
    await processDirectory(assetsDir);
    console.log(`\n✅ Processed ${processedImages.length} images`);
    console.log('\nNext steps:');
    console.log('1. Update image references in components to use .webp');
    console.log('2. (Optional) Delete original .jpg/.png files to save space');
})();
