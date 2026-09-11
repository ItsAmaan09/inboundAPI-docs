const fs = require('fs');
const path = require('path');

// Make sure this matches your Angular output directory
const distDir = path.join(__dirname, 'dist', 'aml-api-docs', 'browser');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('index.html not found in dist. Run "npm run build" first.');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf8');

// Inline CSS
html = html.replace(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g, (match, href) => {
  const filePath = path.join(distDir, href);
  if (fs.existsSync(filePath)) {
    return `<style>\n${fs.readFileSync(filePath, 'utf8')}\n</style>`;
  }
  return match;
});

// Inline JavaScript
html = html.replace(/<script[^>]+src="([^"]+)"[^>]*><\/script>/g, (match, src) => {
  const filePath = path.join(distDir, src);
  if (fs.existsSync(filePath)) {
    return `<script type="module">\n${fs.readFileSync(filePath, 'utf8')}\n</script>`;
  }
  return match;
});

// Ensure output directory exists
const outDir = path.join(__dirname, 'single-file-output');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const outPath = path.join(outDir, 'index.html');
fs.writeFileSync(outPath, html, 'utf8');

console.log(`\n===========================================`);
console.log(`Success! Single index.html generated at:`);
console.log(outPath);
console.log(`===========================================\n`);
