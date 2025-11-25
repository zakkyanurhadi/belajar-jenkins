const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // ⭐ gunakan env untuk fleksibilitas

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

// Endpoint untuk health test
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// ⭐ Hindari auto-run saat file diimport ke test
let server = null;

if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`Web server berjalan di http://localhost:${port}`);
  });
}

module.exports = app; // export app untuk test
