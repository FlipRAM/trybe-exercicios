document.getElementById('header-container').style.backgroundColor = 'green'

let emergencyTasksHeaders = document.querySelectorAll('section.emergency-tasks h3')

for (let i = 0; i < emergencyTasksHeaders.length; i += 1) {
  emergencyTasksHeaders[i].style.backgroundColor = 'purple'
}

let noEmergencyTasksHeaders = document.querySelectorAll('section.no-emergency-tasks h3')

for (let i = 0; i < noEmergencyTasksHeaders.length; i += 1) {
  noEmergencyTasksHeaders[i].style.background = 'black'
}

let emergencyTasksBack = document.querySelectorAll('section.emergency-tasks')

for (let i = 0; i < emergencyTasksBack.length; i += 1) {
  emergencyTasksBack[i].style.backgroundColor = 'pink'
}

let noEmergencyTasksBack = document.querySelectorAll('section.no-emergency-tasks')

for (let i = 0; i < noEmergencyTasksBack.length; i += 1) {
  noEmergencyTasksBack[i].style.background = 'yellow'
}

document.getElementById('footer-container').style.backgroundColor = 'green'
