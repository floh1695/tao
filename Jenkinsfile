def getServiceName(branch) {
  switch (branch) {
    case "production":
      return "taoprogramming.service"
    default:
      return "NONE"
  }
}

def setFnmEnvironment() {
  'eval "$(~/.local/share/fnm/fnm env --use-on-cd)"'
}

pipeline {
  agent any

  environment {
    branch = "${env.BRANCH_NAME}"
    serviceName = getServiceName(branch)
  }

  stages {
    stage("Build") {
      steps {
        sh """
          ${setFnmEnvironment()}
          cd web

          ~/.local/share/fnm/fnm use

          npm install
          npm run build
        """
      }
    }

    stage("Deploy") {
      when {
        expression {
          serviceName != "NONE"
        }
      }
      steps {
        script {
          sh """
            sudo systemctl stop ${serviceName}
            rsync -avz --exclude='.git/' web/ /opt/tao.charlesbayley.dev/${branch}/
            sudo systemctl start ${serviceName}
          """
        }
      }
    }
  }
}
