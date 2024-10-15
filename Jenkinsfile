pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                npm 'install'
                npm 'run start'
            }
        }
    }
}
