// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const fs = require("fs");
const { Z_FILTERED } = require("zlib");
 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title", 
        message: "Please enter the Project title:"
    }, 
    {   
        type: "input", 
        name: "description", 
        message: "Please enter the project description:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage instructions here:" 

    },
    {
        type: "input", 
        name: "contributions", 
        message: "Enter the contribution guidelines:"
    },
    {
        type: "input", 
        name: "installation", 
        message: "Enter the installation instructions here:"
    },
    {
        type: "input", 
        name: "tests", 
        message: "Enter the tests instructions:"
    }, 
    {
        type: "input", 
        name: "email", 
        message: "Enter your email address:"
    }, 
    {
        type: "input", 
        name: "github", 
        message: "Enter your GitHub URL:"
    }, 
    {
        type: "list",
        name: "license",
        message: "Select a license type:",
        choices: ['Apache', 'BSD', 'Eclipse', 'GNUGPLv3', 'MIT'],
        filter(vol){
            return vol.toLowerCase();
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.log("could not save file", err);
        } else{
            console.log(`Success: new README file has been generated. File is: ${fileName}"`);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //console.info("Answer:",  answers);
        const readmeDetails = generateMarkdown(answers);
        writeToFile(`README.md`, readmeDetails);
    });
}

// Function call to initialize app
init();
