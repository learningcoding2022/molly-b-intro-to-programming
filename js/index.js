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