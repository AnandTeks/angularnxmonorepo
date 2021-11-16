def MYAPP1DEPLOY
def TODOSDEPLOY
def FILE_NAME_MYAPP
def FILE_NAME_TODO
pipeline {
    agent any
     stages {
       stage('Package Install') {
            steps {
                script {
                    git branch: 'development', credentialsId: 'a103ab14-296e-467f-92f4-92b3f7d7010d', url: 'https://gitlab.com/AnandMohanKP/angularmononx.git'
                    sh "ls -lart ./*" 
                    sh "git branch -a"
                    sh "git checkout development"
                }
                script {
                        sh "chmod 777 ."
                        sh "npm install"
                        sh "npx nx affected --base=HEAD~1 --target=build --parallel --max-parallel=3"
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    println "CURRENT BUILD NO $BUILD_NUMBER"
                    MYAPPLOGCONTAIN = "- myapp1"
                    TODOSLOGCONTAINT= "- todos"
                    MYAPPCHACHE = "nx run myapp1:build:production [existing outputs match the cache, left as is]"
                    TODOCHANGE = "nx run todos:build:production [existing outputs match the cache, left as is]"
                    MYAPP1DEPLOY = false
                    TODOSDEPLOY = false
                    for (job in Jenkins.instance.getAllItems(Job.class)) {
                        for (build in job.builds) {
                            def log = build.log
                            if (log.contains(MYAPPLOGCONTAIN) && !log.contains(MYAPPCHACHE) && build.id == BUILD_NUMBER) {
                                MYAPP1DEPLOY = true
                                println "********* MY APP APP DEPLOYMENT IS REQUIRED"
                            }
                            if (log.contains(TODOSLOGCONTAINT) && !log.contains(TODOCHANGE) && build.id == BUILD_NUMBER) {
                                TODOSDEPLOY = true
                                println "********* TODO DEPLOYMENT IS REQUIRED"
                            }
                        }
                    }
                    
                }
            }
        }
        stage('Publish') {
                steps {
                    script{
                        if (MYAPP1DEPLOY == true ) {
                            ws("/var/lib/jenkins/workspace/Demo1/dist/apps/") {
                            echo "Current workspace is $WORKSPACE"
                                FILE_NAME_MYAPP = "myapp_${BUILD_NUMBER}.zip"
                                zip archive: true, dir: 'myapp1', glob: '', zipFile: FILE_NAME_MYAPP
                                //publish URL
                            }
                        }  
                        if(TODOSDEPLOY == true) {
                             ws("/var/lib/jenkins/workspace/Demo1/dist/apps/") {
                               FILE_NAME_TODO = "todos_${BUILD_NUMBER}.zip"
                               zip archive: true, dir: 'todos', glob: '', zipFile: FILE_NAME_TODO
                               //publish URL
                             }
                        }
                    }
                }
        }
        stage('Deploy') {
            steps {
                script {
                        if (MYAPP1DEPLOY == true ) {
                            ws("/var/www/html/") {
                                echo "Current workspace is $WORKSPACE"
                                sh "rm -r -f *"
                                //Deploy URL
                                unzip zipFile: FILE_NAME_MYAPP , dir: ''
                            }
                        }
                        if (TODOSDEPLOY == true ) {
                            ws("/usr/share/nginx/html/") {
                                echo "Current workspace is $WORKSPACE"
                                sh "rm -r -f *"
                                //Deploy URL
                                unzip zipFile: FILE_NAME_TODO , dir: ''
                            }
                        }
                    }
            }   
        }
    }
}