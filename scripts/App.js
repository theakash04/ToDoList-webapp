let input = document.querySelector(".input-section input");
let addbtn = document.querySelector("#create");
let TaskConatiner = document.querySelector("#Tasks");
let alertBox = document.querySelector(".alert");

const addTask=()=>{
  let task = input.value;
  if(task === ""){
    alertBox.children[0].innerText = "Please Enter some Text!";
    alertBox.setAttribute('style', 'display: block');
    setInterval(()=>{
      alertBox.setAttribute('style', 'display: none');
    }, 3100)
  }else if(task.length > 26){
    alertBox.children[0].innerText = "please enter words <= 25";
    alertBox.setAttribute('style', 'display: block');
    setInterval(()=>{
      alertBox.setAttribute('style', 'display: none');
    }, 3100)
    task = "";
  }else{
    let newTask = document.createElement('p');
    newTask.innerText = task;
    TaskConatiner.appendChild(newTask);

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    newTask.appendChild(span);

    span.addEventListener("click", ()=>{
      document.removeChild
    })
  }
}

addbtn.addEventListener("click", ()=>{
  addTask();
  input.value = '';
  saveData();
});

input.addEventListener("keypress", (evt)=>{
  if(evt.key === "Enter"){
    evt.preventDefault();
    addbtn.click();
  }
});

TaskConatiner.addEventListener("click", (evt)=>{
  if(evt.target.tagName === "P"){
    evt.target.classList.toggle("checked");
    saveData()
  }
  else if(evt.target.tagName === "SPAN"){
    evt.target.parentElement.remove();
    saveData();
  }
},false);


const saveData = () =>{
  localStorage.setItem("Tasks", TaskConatiner.innerHTML)
}

const showTask = () =>{
  TaskConatiner.innerHTML = localStorage.getItem("Tasks");
}

window.addEventListener("load", ()=>{
  showTask();
})