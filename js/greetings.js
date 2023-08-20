const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;  // after get a username, show the greeting
    greeting.classList.remove(HIDDEN_CLASSNAME);  // show the greeting
}

function onLoginSubmit(event) {
    // html form (not div)에서 submit event가 발생하면,
    event.preventDefault();  // prevent default behavior (reloading) of form 
    loginForm.classList.add(HIDDEN_CLASSNAME);  // after submit, hide the form
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);  // save username in localStorage
    // combine string with variable `string ${variable}}`
    paintGreetings(username);
    console.log(username); 
}

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}