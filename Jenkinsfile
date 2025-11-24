pipeline {
    agent any

    tools {
        // Nama ini HARUS SAMA dengan yang kamu buat di Tahap 1 tadi
        nodejs 'node20'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Mengambil kode dari branch main
                git branch: 'main', url: 'https://github.com/zakkyanurhadi/belajar-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '🚀 Sedang menginstall library...'
                // Install sesuai package.json
                sh 'npm install' 
            }
        }

        stage('Run Test') {
            steps {
                echo '🧪 Sedang menjalankan test...'
                // Menjalankan script "test" yang ada di package.json
                sh 'npm test'
            }
        }
    }
}
