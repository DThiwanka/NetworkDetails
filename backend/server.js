const express = require('express');
const getmac = require('getmac');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/get-mac', (req, res) => {
    try {
      const macAddress = getmac.default();
      res.json({ macAddress });
    } catch (err) {
      res.status(500).json({ error: 'Unable to fetch MAC address' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
