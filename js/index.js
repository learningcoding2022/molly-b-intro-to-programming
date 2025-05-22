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
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  console.log(usersName);
  const usersEmail = event.target.usersEmail.value;
  console.log(usersEmail);
  const usersMessage = event.target.usersMessage.value;
  console.log(usersMessage);

  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML =` 
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span>${usersMessage}</span>`

  //reset form
  messageForm.reset();
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.type = 'button';
  removeButton.classList.add('remove-btn');

  //add event listener to removeButton element that handles the "Click" event
  removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  //append the removeButton to the newMessage element
  newMessage.appendChild(removeButton);
  messageList.append(newMessage);

  //messageList

});
