const express = require('express');
const getmac = require('getmac');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const detailsRouter = require('./routes/Details');  // Ensure this path is correct
app.use("/api", detailsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
