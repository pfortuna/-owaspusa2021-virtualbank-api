const totp = require("totp-generator");
const config = require('config.json');

module.exports = ott;

function ott(req, res, next) {
    const { ottSecret } = config;
    if (req && req.body) {
        console.log("ott request: "+req.body.ott);
        const token = totp(ottSecret);
        if (token === req.body.ott) console.log("Matched OTT!")
        else {
            console.log("Unmatched OTT :(");
            return res.status(401).json({ message: 'Missing or wrong authorization token' });
        }
    }   
    next();
}