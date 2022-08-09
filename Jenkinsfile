pipeline{
    //робочий код

    agent any

    parameters{
        string(name:'MOINCOINS', defaultValue: "cypress/**/**/**", description: "Enter the script path that you want to executr")
        choice(name:'BROWSER', choices: ['chrome', 'edge'], description: "Choice the browser where you want to execute your scripts")
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])        }
    }
    
    ansiColor('xterm')
    
    stages{
        stage('Bulding'){
            steps{
                echo "Building the application"
            } 
        }
        stage('Testing'){
            steps{
                sh "npm i"
                sh "npx cypress run"
                // sh "npx cypress run --browser ${BROWSER} --spec ${MOINCOINS}"
            }
        }
        stage('Deploying'){
           steps{
            echo "Deploy the application"  
           }  

        }
    }
}
