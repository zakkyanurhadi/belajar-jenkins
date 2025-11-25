const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; text-align: center; padding: 20px;">
        <h1>🚀 Aplikasi Berhasil Deployed!</h1>
        <p>Halo dari Jenkins Freestyle Project + Docker.</p>
        <hr>
        <p>Waktu Server: <strong>${new Date().toString()}</strong></p>
    </div>
  `);
});

// Endpoint khusus untuk testing otomatis
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Kita export servernya agar bisa dimatikan (close) oleh script lain
const server = app.listen(port, () => {
  console.log(`Webserver berjalan1 di http://localhost:${port}`);
});

module.exports = server;