const express = require('express');
const getmac = require('getmac');
const cors = require('cors');
const useragent = require('express-useragent');
const device = require('express-device');
const app = express();
const port = 5000;

app.use(cors());
app.use(useragent.express());
app.use(device.capture());


const detailsRouter = require('./routes/Details');  // Ensure this path is correct
app.use("/api", detailsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
