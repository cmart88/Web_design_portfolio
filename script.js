let myButton = document.querySelector('#user');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to my page ' + myName;
  }
  if(!localStorage.getItem('name')) {
	setUserName();
  } else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to my page ' + storedName;
  }
  myButton.onclick = function() {
	setUserName();
  }
 