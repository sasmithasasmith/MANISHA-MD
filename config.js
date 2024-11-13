const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3yQWiZKa#lRb9ixQ_awC1pZQm-nOJYTkpv2LSBgmoy3GI3ka8Saw",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/eoqwjz.jpg",
ALIVE_MS: process.env.ALIVE_MSG || "I'm Alive Now",
};
