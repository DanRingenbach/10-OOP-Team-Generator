const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');
const { choices } = require('yargs');
const util = require('util');



let listOfTeam = []

const promptUser =
  function () {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',

      },
      {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: [
          'Manager',
          'Engineer',
          'Intern'
        ]
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github id?',
        when: (userInput) => userInput.role === 'Engineer'
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your school name?',
        when: (userInput) => userInput.role === 'Intern'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        when: (userInput) => userInput.role === 'Manager'
      },
      {
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to add another team member?',
      }
    ])
      .then(function (answers) {
        let newTeamMember = '';
        if (answers.role === 'Engineer') {
          newTeamMember = new Engineer(answers.name, answers.id, answers.email, answers.github)
        } if (answers.role === 'Intern') {
          newTeamMember = new Intern(answers.name, answers.id, answers.email, answers.school)
        } if (answers.role === 'Manager') {
          newTeamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        }

        listOfTeam.push(newTeamMember);

        loop = function () {
          if (answers.addMember) {
            console.log('\n')
            promptUser();
          } else {
            console.log(listOfTeam)
            appendHTML();


          }
        }
        loop();
      })
  }

appendHTML = function (answers) {
  let HTMLBody = ''
  const HTMLHead = `<!DOCTYPE html>
          <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous" />
            <title>My Team</title>
            </head>

            <body>
            <header class='row justify-content-md-center m-2' style='background-color: royalblue;'>
            <h1 class='m-2'>My Team</h1>
            </header>
            <div class='row justify-content-center'>`



  listOfTeam.forEach((item, index) => {
    console.log(item, index)
    if (item.officeNumber) {

      const managerCard = `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <h6 class="card-text">Manager</h6>
            <i class="fas fa-glasses"></i>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${item.id}</li>
            <a class="list-group-item" href = "mailto: ${item.email}">Email</a>
            <li class="list-group-item">${item.officeNumber}</li>
          </ul>
          </div>`
      console.log(managerCard)
      HTMLBody = HTMLBody + managerCard

    }
    if (item.github) {

      const engineerCard = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <h6 class="card-text">Engineer</h6>
              <i class="fas fa-tools"></i>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${item.id}</li>
              <a class="list-group-item" href = "mailto: ${item.email}">Email</a>
              <a class="list-group-item" href="https://github.com/${item.github}">GitHub</a>
            </ul>
            </div>`
      console.log(engineerCard)
      HTMLBody = HTMLBody + engineerCard
    }
    if (item.school) {

      const internCard = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <h6 class="card-text">Intern</h6>
              <i class="fas fa-book"></i>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${item.id}</li>
              <a class="list-group-item" href = "mailto: ${item.email}">Email</a>
              <li class="list-group-item">${item.school}</li>
            </ul>
            </div>`
      console.log(internCard)
      HTMLBody = HTMLBody + internCard
    }
    fs.writeFile("index.html", HTMLHead + HTMLBody, function (err) {
      if (err) {
        return console.log(err);
      }

    });

  });

}

promptUser();













