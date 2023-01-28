
const fs= require('fs');
const generateMD=require('/utils/generateMarkdown.js')
const questions = [
    type:'input',
    fileName: 'name',
    message:'Please input name of the subject app:',
    validate:value=>{
        if(value){
            return true;
        }
    }

    type:'input',
    fileName: 'lisence',
    message:'Please input the license of the subject app:',
    validate:value=>{
        if(value){
            return true;
        }
    
    }
    type:'input',
    fileName: 'installation',
    message:'Please descripbe how to install the subject app:',
    validate:value=>{
        if(value){
            return true;
        }
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
