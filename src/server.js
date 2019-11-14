const express = require('express');

const app = express();
const port = 8000;

app.get('/api', (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
