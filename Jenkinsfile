// pipeline {
//     agent any

//     // Definisi tahapan (stages) dalam pipeline
//     stages {
        
//         // Tahap 1: Build (Persiapan)
//         // Di sinilah 'Build Step' yang Anda minta terjadi.
//         // Untuk Node.js, biasanya adalah menginstall dependensi.
//         stage('Build') {
//             steps {
//                 echo 'Memulai proses Build...'
//                 // Jika menggunakan Linux/Mac gunakan 'sh', jika Windows gunakan 'bat'
//                 // Perintah ini akan menginstall package yang ada di package.json
//                 sh 'npm install' 
//             }
//         }

//         // Tahap 2: Test
//         // Memastikan kode berjalan dengan baik sebelum di-deploy
//         stage('Test') {
//             steps {
//                 echo 'Memulai proses Testing...'
//                 // Menjalankan script "test" yang ada di package.json
//                 sh 'npm test'
//             }
//         }
        
//         // Tahap 3: Run (Simulasi Deploy)
//         stage('Deploy Simulation') {
//             steps {
//                 echo 'Menjalankan aplikasi...'
//                 sh 'node app.js'
//             }
//         }
//     }

//     // Aksi setelah semua stage selesai (Post-build actions)
//     post {
//         success {
//             echo 'Pipeline BERHASIL diselesaikan!'
//         }
//         failure {
//             echo 'Pipeline GAGAL. Silakan cek logs.'
//         }
//     }
// }