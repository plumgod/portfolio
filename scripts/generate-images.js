const fs = require('fs');
const path = require('path');

const categories = ['photography', 'digital-art'];
const photosDir = path.join(__dirname, '../public/photography');

const imageData = {};

categories.forEach(category => {
  const categoryPath = path.join(photosDir, category);
  
  if (fs.existsSync(categoryPath)) {
    const files = fs.readdirSync(categoryPath)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/photography/${category}/${file}`);
    
    imageData[category] = files;
  } else {
    imageData[category] = [];
  }
});

// Write to a JSON file
const outputDir = path.join(__dirname, '../app/visual-art');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'images.json');
fs.writeFileSync(outputPath, JSON.stringify(imageData, null, 2));

console.log('✅ Generated images.json');
console.log(`Photography: ${imageData.photography?.length || 0} images`);
console.log(`GAN Art: ${imageData['digital-art']?.length || 0} images`);