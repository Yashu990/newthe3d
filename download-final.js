
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const downloadDir = path.join(__dirname, 'public', 'photo', 'logos');

if (!fs.existsSync(downloadDir)) { fs.mkdirSync(downloadDir, { recursive: true }); }

// High quality PNG/SVG sources from Wikimedia ensuring 200 responses
const logos = [
    { name: 'indian-railways.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Indian_Railways_logo.svg/1200px-Indian_Railways_logo.svg.png' },
    { name: 'amity.png', url: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Amity_University_logo.png' },
    { name: 'sharda.png', url: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Sharda_University_logo.svg' }, // treating as source
    { name: 'ordnance.png', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Ordnance_Factory_Board_Logo.png' },
    { name: 'galgotias.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Galgotias_University_logo.svg/1024px-Galgotias_University_logo.svg.png' },
    { name: 'shiv-nadar.png', url: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Shiv_Nadar_University_Logo.svg' },
    { name: 'aiims.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/AIIMS_New_Delhi.svg/1200px-AIIMS_New_Delhi.svg.png' },
    { name: 'cars24.png', url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Cars24_logo.svg' },
    { name: 'dtu.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU_Delhi_Official_Logo.svg/1200px-DTU_Delhi_Official_Logo.svg.png' },
    { name: 'euler.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Euler_Motors_Logo.png/800px-Euler_Motors_Logo.png' },
    { name: 'asahi.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Asahi_India_Glass_Logo.svg/1024px-Asahi_India_Glass_Logo.svg.png' }
];

function download(url, dest) {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://en.wikipedia.org/' // Sometimes helps
        }
    }, function (response) {
        if (response.statusCode === 200) {
            response.pipe(file);
        } else {
            console.log(`Failed ${url}: ${response.statusCode}`);
            file.close();
            fs.unlink(dest, () => { });
        }
    });
}

logos.forEach(l => {
    // Only download if missing
    if (!fs.existsSync(path.join(downloadDir, l.name))) {
        download(l.url, path.join(downloadDir, l.name));
    }
});
