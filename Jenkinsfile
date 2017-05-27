#!/usr/bin/env groovy

node {
   def nodeHome
   stage('Preparation') {
      deleteDir()
      git 'https://backend.r-w-x.net/scm/git/aurelia/aurelia-highlightjs.git'
      nodeHome = tool 'NodeJS_4.6.0'
      env.PATH = "${nodeHome}/bin:${env.PATH}"
      sh "npm -v"
      sh "node -v"
      sh "jspm -v"
   }
   withEnv(["PATH=${tool 'NodeJS_4.6.0'}/bin:${PATH}"]) {
     stage('Install Dependencies') {
         sh "npm install"
     }
     stage("Bundle Library") {
         sh "npm run bundle"
     }
     stage("Bundle Demo Site") {
         sh "npm run bundle:site"
     }
     stage("Package Demo Site") {
         sh "npm run site-package"
     }
   }
   
   
  // stage('Results') {
    //  junit '**/target/surefire-reports/TEST-*.xml'
      //archive 'target/*.jar'
   //}
}
stage('Publish Demo Site') {
    timeout(time:5, unit:'DAYS') {
       input 'Should we proceed to the publishing ?'
    }
    node {
      sh "scp dist-site/aurelia-highlightjs-site-*.tgz rwxywdhy@ssh.cluster002.ovh.net:/homez.32/rwxywdhy/aurelia-highlightjs-depot/"
      sh 'ssh rwxywdhy@ssh.cluster002.ovh.net "tar xzvf /homez.32/rwxywdhy/aurelia-highlightjs-depot/$(basename ./dist-site/aurelia-highlightjs-site-*.tgz) -C /homez.32/rwxywdhy/aurelia-highlightjs"'
    }
}
stage('Publish to NPM') {
    timeout(time:5, unit:'DAYS') {
       input 'Should we deliver this version ?'
    }
    node {
        withEnv(["PATH=${tool 'NodeJS_4.6.0'}/bin:${PATH}"]) {
            sh "npm publish"
        }
    }
}