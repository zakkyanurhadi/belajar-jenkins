const http = require('http');
const app = require('./app'); // Import app untuk dijalankan

console.log('--- Menjalankan Unit Test Sederhana ---');

// Cek apakah halaman /health merespon 'OK'
http.get('http://localhost:3000/health', (res) => {
  let data = '';

  res.on('data', (chunk) => { data += chunk; });

  res.on('end', () => {
    if (res.statusCode === 200 && data === 'OK') {
      console.log('✅ TEST SUKSES: Webserver sehat!');
      app.close(); // Matikan server setelah test selesai
      process.exit(0); // Kode 0 artinya Sukses
    } else {
      console.error('❌ TEST GAGAL: Respon tidak sesuai');
      app.close();
      process.exit(1); // Kode 1 artinya Gagal (Jenkins akan stop)
    }
  });

}).on('error', (err) => {
  console.error('❌ TEST GAGAL: Tidak bisa connect ke server. ' + err.message);
  app.close();
  process.exit(1);
});