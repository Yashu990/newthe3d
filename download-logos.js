
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs using Clearbit for better reliability
const logos = [
    { name: 'isro.png', url: 'https://logo.clearbit.com/isro.gov.in?size=200' },
    { name: 'indian-railways.png', url: 'https://logo.clearbit.com/indianrailways.gov.in?size=200' },
    { name: 'amity.png', url: 'https://logo.clearbit.com/amity.edu?size=200' },
    { name: 'sharda.png', url: 'https://logo.clearbit.com/sharda.ac.in?size=200' },
    { name: 'paytm.png', url: 'https://logo.clearbit.com/paytm.com?size=200' },
    { name: 'ordnance.png', url: 'https://logo.clearbit.com/ddpdoo.gov.in?size=200' }, // Trying a domain for Ordnance
    { name: 'galgotias.png', url: 'https://logo.clearbit.com/galgotiasuniversity.edu.in?size=200' },
    { name: 'shiv-nadar.png', url: 'https://logo.clearbit.com/snu.edu.in?size=200' },
    { name: 'aiims.png', url: 'https://logo.clearbit.com/aiims.edu?size=200' },
    { name: 'cars24.png', url: 'https://logo.clearbit.com/cars24.com?size=200' },
    { name: 'dtu.png', url: 'https://logo.clearbit.com/dtu.ac.in?size=200' },
    { name: 'euler.png', url: 'https://logo.clearbit.com/eulermotors.com?size=200' },
    { name: 'asahi.png', url: 'https://logo.clearbit.com/aisglass.com?size=200' }
];

const downloadDir = path.join(__dirname, 'public', 'photo', 'logos');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadFile(url, dest) {
    // If file already exists and is > 1KB, skip (to avoid overwriting good files with potential errors)
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1024) {
        console.log(`Skipping ${dest} (already exists)`);
        return;
    }

    const file = fs.createWriteStream(dest);
    https.get(url, function (response) {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
            // Basic redirect handling (one level)
            console.log(`Redirect for ${url}`);
            downloadFile(response.headers.location, dest);
            return;
        }
        if (response.statusCode !== 200) {
            console.error(`Status ${response.statusCode} for ${url}`);
            file.close();
            fs.unlink(dest, () => { });
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded to ${dest}`);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => { });
        console.error(`Error downloading ${url}: ${err.message}`);
    });
}

logos.forEach(logo => {
    downloadFile(logo.url, path.join(downloadDir, logo.name));
});
