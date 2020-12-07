"use strict";

//user can only login with these names.
let attempts = ["yazeen", "ec", "softhouse"];

const form = document.createElement("form");
const input = document.createElement("input");

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
  document.querySelector("body").appendChild(form);
}

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "attempt" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
  let label = document.createElement("label");
  label.textContent = "Username:";
  form.appendChild(label);
}

function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
  input.required = true;
  form.appendChild(input);
}

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).

  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).

  let button = document.createElement("button");
  button.textContent = "Log in";
  form.appendChild(button);

  button.addEventListener("click", () => {
    if (validateLoginInfo()) {
      alert("Welcome");
    }
    else {
      input.style.border = "3px solid red";
    }
  })
};

function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the attempt is in the attempts array return true if not return false.
  let username = input.value;
  let isUsernameInAttempts = false;

  for (let i = 0; i < attempts.length; i++) {
    if (username === attempts[i]) {
      isUsernameInAttempts = true;
      break;
    }
  }
  return isUsernameInAttempts;
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)
window.addEventListener("DOMContentLoaded", init);