let input = document.querySelector(".input-section input");
let addbtn = document.querySelector("#create");
let TaskConatiner = document.querySelector("#Tasks");
let main = document.querySelector("main");




const alertbox = (txt)=>{
  const div1 = document.createElement('div');
  div1.className = "alert";
  main.appendChild(div1);

  const span = document.createElement('span');
  span.className = "alerttxt";
  span.textContent = `${txt}`
  div1.appendChild(span);

  const div2 = document.createElement('div');
  div2.className = "bar";
  div1.appendChild(div2);
  
  //seting interval 
  setInterval( () =>{
    div1.remove();
  }, 3100)
}





const addTask=()=>{
  let task = input.value;
  if(task === ""){
    alertbox("Please Enter some Text!");
  }else if(task.length > 26){
    alertbox("please enter words <= 25");
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