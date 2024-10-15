pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                sh 'npm i'
                sh 'npm run start'
            }
        }
    }
}
