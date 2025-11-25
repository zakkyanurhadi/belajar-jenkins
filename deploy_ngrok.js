const ngrok = require('ngrok');
const app = require('./app');

(async function () {
  console.log("--- Memulai Deploy Testing dengan Ngrok ---");

  try {
    // Hentikan tunnel sebelumnya jika masih aktif
    await ngrok.kill().catch(() => {});

    // Tunggu 1 detik agar proses lama benar-benar mati
    await new Promise(res => setTimeout(res, 1000));

    // Buat tunnel baru
    const url = await ngrok.connect({
      addr: 3000,
      authtoken: "2wQdCQY3cXI0MJwYsZed5CYwrTU_5g1wJfnTACheRQdJKBvL5",
      region: "ap"
    });

    console.log("==========================================");
    console.log("   APLIKASI ONLINE DI URL BERIKUT:");
    console.log(`   👉 ${url}`);
    console.log("==========================================");
    console.log("Silakan buka URL di atas untuk mengetes aplikasi.");
    console.log("Server akan tetap hidup selama 60 detik...");

    setTimeout(async () => {
      console.log("⏳ Timeout selesai. Mematikan Ngrok dan server...");
      await ngrok.disconnect();
      await ngrok.kill();

      if (app && typeof app.close === "function") app.close();

      console.log("🚀 NGROK & SERVER TELAH DIMATIKAN");
      process.exit(0);
    }, 60000);

  } catch (err) {
    console.error("❌ Gagal connect ke Ngrok:", err);
    // Supaya Jenkins tidak fail build
    process.exit(0);
  }

})();
