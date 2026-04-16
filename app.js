const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ status: 'ok', version: process.env.APP_VERSION || '1.0.0' }));
app.get('/health', (req, res) => res.json({ healthy: true }));

app.listen(3000, () => console.log('App running on port 3000'));
