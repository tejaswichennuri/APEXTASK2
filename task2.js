// Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let error = document.getElementById("error");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(name === "" || email === ""){
error.textContent = "All fields are required";
return;
}

if(!email.match(emailPattern)){
error.textContent = "Enter a valid email";
return;
}

error.style.color = "green";
error.textContent = "Form submitted successfully";

});


// DOM Manipulation (To-Do List)

function addTask(){

let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

if(taskInput.value === "") return;

let li = document.createElement("li");
li.textContent = taskInput.value;

li.onclick = function(){
li.remove();
};

taskList.appendChild(li);

taskInput.value = "";

}