pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building React App...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here, e.g., bat 'npm test'
                echo 'No tests defined yet.'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        echo 'Deploying to PRODUCTION environment...'
                        // Add your deployment commands here
                    } else {
                        echo "Skipping deployment for branch: ${env.BRANCH_NAME}"
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
