pipeline {
    agent any 
    environment {
        DB_PASSWORD = credentials('db-password')
        API_KEY = credentials('api-key')
        APP_VERSION = '1.0.0'
    }
    stages {
        stage('Install') {
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'mpm test' }
        }
        stage('Deploy') {
            steps { echo "Deploying version ${APP_VERSION}" }
        }
    }
}