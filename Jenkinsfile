pipeline {
    agent any 
    environment {
        DB_PASSWORD = credentials('db-password')
        API_KEY = credentials('api-key')
        APP_VERSION = '1.0.0'
    }
    stages {
        stage('Checkout') {
            steps {
                echo "Code checked out from GitHub"
                sh 'ls -la'
            }
        }
        stage('Install') {
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
        stage('Deploy') {
            steps { echo "Deploying version ${APP_VERSION}" }
        }
    }
}