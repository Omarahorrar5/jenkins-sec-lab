pipeline {
    agent any
    environment {
        DB_PASSWORD = credentials('db-password')
        API_KEY     = credentials('api-key')
        APP_VERSION = '1.0.0'
    }
    stages {
        stage('Checkout') {
            steps {
                echo "Repo: ${env.GIT_URL}"
                echo "Branch: ${env.GIT_BRANCH}"
                sh 'ls -la'
            }
        }
        stage('Install') {
            steps {
                sh '''
                    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
                    apt-get install -y nodejs
                    npm install
                '''
            }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
        stage('Deploy') {
            steps {
                echo "Deploying version ${APP_VERSION}"
                echo "Secrets are masked — DB_PASSWORD: ${DB_PASSWORD}"
            }
        }
    }
    post {
        success { echo 'Pipeline succeeded!' }
        failure { echo 'Pipeline failed!' }
    }
}