
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Reliable Wikimedia Sources
const logos = [
    { name: 'isro.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/1200px-Indian_Space_Research_Organisation_Logo.svg.png' },
    { name: 'indian-railways.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Indian_Railways_logo.svg/1200px-Indian_Railways_logo.svg.png' },
    { name: 'amity.png', url: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Amity_University_logo.png' },
    { name: 'sharda.svg', url: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Sharda_University_logo.svg' },
    { name: 'paytm.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png' },
    { name: 'ordnance.png', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Ordnance_Factory_Board_Logo.png' },
    { name: 'galgotias.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Galgotias_University_logo.svg/2560px-Galgotias_University_logo.svg.png' },
    { name: 'shiv-nadar.svg', url: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Shiv_Nadar_University_Logo.svg' },
    { name: 'aiims.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/AIIMS_New_Delhi.svg/1200px-AIIMS_New_Delhi.svg.png' },
    { name: 'cars24.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Cars24_logo.svg' },
    { name: 'dtu.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU_Delhi_Official_Logo.svg/1200px-DTU_Delhi_Official_Logo.svg.png' },
    { name: 'euler.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Euler_Motors_Logo.png/800px-Euler_Motors_Logo.png' },
    { name: 'asahi.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Asahi_India_Glass_Logo.svg/2560px-Asahi_India_Glass_Logo.svg.png' }
];

const downloadDir = path.join(__dirname, 'public', 'photo', 'logos');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadFile(url, dest) {
    const file = fs.createWriteStream(dest);
    https.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    }, function (response) {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
            console.log(`Redirecting for ${path.basename(dest)}`);
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
            console.log(`Downloaded ${path.basename(dest)}`);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => { });
        console.error(`Error downloading ${url}: ${err.message}`);
    });
}

logos.forEach(logo => {
    downloadFile(logo.url, path.join(downloadDir, logo.name));
});
