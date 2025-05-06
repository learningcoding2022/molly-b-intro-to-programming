//add a footer element
const newCopyright = document.createElement('div');

//create a variable named today and assign it a new date object
const today = new Date();

const thisYear = today.getFullYear();


//add new footer element to the body document
document.body.appendChild(newCopyright);

const footer = document.querySelector('#Connect');

const copyright = document.createElement('p');

copyright.innerHTML = `© ${thisYear} Molly Brown`;

footer.appendChild(copyright);

//add array of skills
const skills = ["React", "JavaScript", "API", "GitHub", "Codeberg", "HTML", "CSS", "Sass", "Airtable", "Node.js", "Debugging", "Agile Framework", "WordPress", "Health Information Systems", "AAC Devices", "CodeSandbox", "VS Code", "Chrome DevTools", "Slack", "Trello", "Cross-Browser Development", "Responsive Design", "Version Control"];

const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
