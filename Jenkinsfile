pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root'
        }
    }
    environment {
        DB_PASSWORD = credentials('db-password')
        API_KEY     = credentials('api-key')
        APP_VERSION = '1.0.0'
    }
    stages {
        stage('Checkout') {
            steps {
                echo "Code checked out from: ${env.GIT_URL}"
                echo "Branch: ${env.GIT_BRANCH}"
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
            steps {
                echo "Deploying version ${APP_VERSION}"
                echo "DB_PASSWORD is masked: ${DB_PASSWORD}"
            }
        }
    }
    post {
        success { echo 'Pipeline succeeded!' }
        failure { echo 'Pipeline failed!' }
    }
}