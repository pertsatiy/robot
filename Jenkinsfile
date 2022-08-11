

def COLOR_MAP=[
    'SUCCESS': 'good',
    'FAILURE': 'danger',
]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline{

    agent any

    environment{
        BUILD_USER = ''
    }

    parameters{
        string(name:'MOINCOINS', defaultValue: "cypress/**/**/**", description: "Enter the script path that you want to executr")
        choice(name:'BROWSER', choices: ['chrome', 'edge'], description: "Choice the browser where you want to execute your scripts")
    }

    post{
        always{

            script{
                BUILD_USER = getBuildUsers()
            }

            slackSend channel: '#jenkins-robot',
                      color: COLOR_MAP[currentBuild.currentResult],
                      message: "*${currentBuild.currentResult}:* ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n Tests: ${MOINCOINS} executed at ${BROWSER} \n This is a test for robot.txt. The file must be downloaded by clicking on the Zip button in the upper right, the file name is index.html. More information at: ${env.BUILD_URL}HTML_20Report/"

            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])    
        }
    }
    
    options{
            ansiColor('xterm')
    }
    
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
