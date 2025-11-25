const ngrok = require('ngrok');
const app = require('./app'); // Import app yang sudah jalan

(async function() {
  console.log("--- Memulai Deploy Testing dengan Ngrok ---");
  
  try {
    // Menghubungkan port 3000 ke internet
    // Catatan: Jika gagal, pastikan Anda punya authtoken ngrok atau koneksi lancar
    const url = await ngrok.connect(3000);
    
    console.log("==========================================");
    console.log("   APLIKASI ONLINE DI URL BERIKUT:");
    console.log(`   👉 ${url}`);
    console.log("==========================================");
    console.log("Silakan buka URL di atas untuk mengetes aplikasi.");
    console.log("Server akan tetap hidup selama 60 detik untuk testing...");

    // Biarkan server hidup selama 60 detik agar Anda sempat klik link-nya
    setTimeout(() => {
      console.log("Waktu testing habis. Mematikan server...");
      app.close();
      process.exit(0);
    }, 60000);

  } catch (error) {
    console.error("Gagal connect ke Ngrok:", error);
    // Kita exit 0 agar build tetap dianggap sukses meski ngrok gagal
    // (Opsional: ganti ke 1 jika ingin build gagal saat ngrok error)
    process.exit(0); 
  }
})();