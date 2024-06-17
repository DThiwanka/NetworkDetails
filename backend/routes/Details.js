const router = require('express').Router();
const getmac = require('getmac');
const ipinfo = require('ipinfo');
const axios = require('axios');
const useragent = require('express-useragent');
const device = require('express-device');

router.route('/get-mac').get((req, res) => {
    try {
        const macAddress = getmac.default();
        res.json({ macAddress });
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch MAC address' });
    }
});

router.route('/get-location').get(async (req, res) => {
    try {
        const { data: { ip } } = await axios.get('https://api.ipify.org?format=json');
        ipinfo(ip, (err, cLoc) => {
            if (err) {
                res.status(500).json({ error: 'Unable to fetch location' });
            } else {
                res.json(cLoc);
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch IP address' });
    }
});

router.route('/device').get((req, res) => {
    const deviceInfo = {
        browser: req.useragent.browser,
        version: req.useragent.version,
        os: req.useragent.os,
        platform: req.useragent.platform,
        isMobile: req.useragent.isMobile,
        isTablet: req.useragent.isTablet,
        isDesktop: req.useragent.isDesktop,
        isBot: req.useragent.isBot,
        source: req.useragent.source,
        device: req.device.type, // mobile, tablet, desktop, bot
        isPhone: req.device.type === 'phone',
        isTablet: req.device.type === 'tablet'
    };

    res.json(deviceInfo);
});

module.exports = router;
