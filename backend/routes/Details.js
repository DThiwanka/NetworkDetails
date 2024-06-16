const router = require('express').Router();
const getmac = require('getmac');
const ipinfo = require('ipinfo');
const axios = require('axios');


router.route('/get-mac').get((req, res) => {
    try {
        const macAddress = getmac.default();
        res.json({ macAddress });
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch MAC address' });
    }
});

router.route('/get-location').get(async(req, res) => {
    const { data: { ip } } = await axios.get('https://api.ipify.org?format=json');
    ipinfo(ip, (err, cLoc) => {
        if (err) {
            res.status(500).json({ error: 'Unable to fetch location' });
        } else {
            res.json(cLoc);
        }
    });
});


module.exports = router;
