pipeline {
    agent any

    tools {
        nodejs 'node17'   // Sesuaikan dengan nama Node yang kamu daftarkan di Jenkins (Global Tool Configuration)
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Pulling source code from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/zakkyanurhadi/belajar-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            when {
                expression { fileExists('package.json') && sh(script: "jq '.scripts.test' package.json", returnStatus: true) == 0 }
            }
            steps {
                echo '🧪 Running tests...'
                sh 'npm test'
            }
        }

        stage('Build') {
            when {
                expression { fileExists('package.json') }
            }
            steps {
                echo '🏗️ Running build script (if exists)...'
                sh 'npm run build || echo "No build script found, skipping."'
            }
        }

        stage('Start App') {
            steps {
                echo '🚀 Starting application...'
                sh 'npm start'
            }
        }
    }

    post {
        success {
            echo '🎉 Build completed successfully!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
