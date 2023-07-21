pipeline {
  agent any

  environment {
    branch = "${env.BRANCH_NAME}"
    serviceName = getServiceName(branch)
  }

  stages {
    stage('Build') {
      steps {
        sh """
          source .env.fnm.sh

          npm install
          npm run build
        """
      }
    }

    stage('Deploy') {
      when {
        expression {
          serviceName != ""
        }
      }
      steps {
        script {
          sh """
            sudo systemctl stop ${serviceName}
            rsync -avz --exclude='.git/' ./ /opt/tao.charlesbayley.dev/${branch}/
            sudo systemctl start ${serviceName}
          """
        }
      }
    }
  }
}

def getServiceName(branch) {
  switch (branch) {
    case "production":
      return "taoprogramming.service"
    default:
      return ""
  }
}
