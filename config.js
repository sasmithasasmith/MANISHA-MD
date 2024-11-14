const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "y7ggDCzb#9D5TqnlfPzOzNRJ22dwZIp9Pufk7Uwu-RxazqgGIt1w",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/6ctae3.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*🎇WELLCOME TO MY MANISHA-MD BOT🎇*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
