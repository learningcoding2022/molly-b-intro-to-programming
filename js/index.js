//create a variable named today and assign it a new date object
const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('#Connect');

const copyrightText = document.createElement('p');

copyrightText.innerHTML = `© ${thisYear} Molly Brown`;

footer.appendChild(copyrightText);

//add array of skills
const skills = ["React", "JavaScript", "API", "GitHub", "Codeberg", "HTML", "CSS", "Sass", "Airtable", "Node.js", "Debugging", "Agile Framework", "WordPress", "Health Information Systems", "AAC Devices", "CodeSandbox", "VS Code", "Chrome DevTools", "Slack", "Trello", "Cross-Browser Development", "Responsive Design", "Version Control"];

const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

//message form
const messageForm = document.forms['leave_message'];
messageForm.addEventListener() {
  const usersName = event.target.usersName;
  console.log(usersName);
  const email = event.target.usersEmail;
  console.log(email);
  const usersMessage = event.target.usersMessage;
  console.log(usersMessage);
}

