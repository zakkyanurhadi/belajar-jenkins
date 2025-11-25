const http = require('http');
const server = require('./app');

console.log('\n=== 🧪 Menjalankan Unit Test Sederhana ===\n');

// Jalankan server dulu
server.start();

setTimeout(() => {
  http.get('http://localhost:3000/health', (res) => {
    let data = '';

    res.on('data', chunk => data += chunk);

    res.on('end', () => {
      if (res.statusCode === 200 && data === 'OK') {
        console.log('✅ TEST SUKSES: Webserver sehat!\n');
        server.stop();
        process.exit(0);
      } else {
        console.error('❌ TEST GAGAL: Response tidak sesuai!\n');
        server.stop();
        process.exit(1);
      }
    });

  }).on('error', err => {
    console.error(`❌ TEST GAGAL: Tidak bisa connect ke server -> ${err.message}\n`);
    server.stop();
    process.exit(1);
  });

}, 500);
