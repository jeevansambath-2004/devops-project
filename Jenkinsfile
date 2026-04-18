pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

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
                // Add your test commands here, e.g., npm test
                echo 'No tests defined yet.'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        echo 'Deploying to PRODUCTION environment...'
                        // Add production deployment commands here
                    } else if (env.BRANCH_NAME == 'develop') {
                        echo 'Deploying to STAGING environment...'
                        // Add staging deployment commands here
                    } else {
                        echo "Skipping deployment for feature branch: ${env.BRANCH_NAME}"
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
            echo 'Build successful! Artifacts are ready.'
        }
        failure {
            echo 'Build failed. Visual check required.'
        }
    }
}
