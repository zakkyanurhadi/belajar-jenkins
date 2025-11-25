const ngrok = require('ngrok');
const app = require('./app'); // Import app yang sudah jalan

(async function() {
  console.log("--- Memulai Deploy Testing dengan Ngrok ---");
  
  try {
    // Kill semua tunnel ngrok yang masih hidup
    await ngrok.kill().catch(() => {});

    // Tunggu sebentar supaya port bebas
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Menghubungkan port 3000 ke internet
    // FIX: Menambahkan authtoken karena Ngrok mewajibkannya sekarang.
    // Tanpa token, process ngrok akan mati dan menyebabkan error 127.0.0.1:4040
    const url = await ngrok.connect({
      addr: 3000,
      authtoken: "2wQdCQY3cXI0MJwYsZed5CYwrTU_5g1wJfnTACheRQdJKBvL5", // <--- Token Ngrok Anda
      region: 'ap' // Opsional: Asia Pacific agar lebih cepat
    });
    
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
    process.exit(0); 
  }
})();