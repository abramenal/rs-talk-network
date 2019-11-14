const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const key = fs.readFileSync(path.resolve(__dirname, '../ssl/selfsigned.key'));
const cert = fs.readFileSync(path.resolve(__dirname, '../ssl/selfsigned.crt'));
const options = {
  key,
  cert,
};

const app = express();
const port = 8001;

app.get('/api', (req, res) => {
  res.json({ ok: true });
});

const server = https.createServer(options, app);
server.listen(port, () => console.log(`App listening on port ${port}!`));
