//query elements and Defining values..
const addButton = document.getElementById('add-button');
const sortButton = document.getElementById('sort-button');
const ViewSection =  document.querySelector('section');
const input = document.querySelector('input');
const list = document.querySelector('ul');
let countTasks = 0;

function whichTaskToAddOrDeleteAndCountTask(){
    let significance =document.getElementById("priority-selector").value;
    const listItem = document.createElement("li");
    const buttonDelete = document.createElement('button');
    const todoContainer = document.createElement('div');
    todoContainer.classList.add("todo-container");
    const todoPriority = document.createElement('div');
    todoPriority.classList.add("todo-priority");
    todoPriority.innerText =significance;
    const todocreatedAt = document.createElement('div');
    todocreatedAt.classList.add("todo-created-at");
    todocreatedAt.innerText =new Date().toLocaleString();
    const todoText = document.createElement('div');
    todoText.classList.add("todo-text");
    todoText.innerText =input.value;
    todoContainer.append(todoPriority);
    todoContainer.append(" ");
    todoContainer.append(todocreatedAt);
    todoContainer.append(" ");
    todoContainer.append(todoText); 
    todoContainer.append(" ");
    input.value='';
    listItem.append(todoContainer);
    listItem.append(" " + " ")
    listItem.append(buttonDelete);
    list.append(listItem);
    buttonDelete.innerText=' done! :)';
    countTasks++;
    document.getElementById('counter').innerHTML = countTasks;
    buttonDelete.onclick = function(e){
        list.removeChild(listItem)
    countTasks--;
    document.getElementById('counter').innerHTML = countTasks;
    }
    input.focus();
 }

//to order the button that when we click on him do this function.
addButton.addEventListener('click', whichTaskToAddOrDeleteAndCountTask);

//to order the input that when we keypress on the enter key do this function.
input.addEventListener('keypress',  (e) => {
    if (e.key === 'Enter')
    {whichTaskToAddOrDeleteAndCountTask()}
});

//function that resort the todo list by their to dos priority 
function sortList (){
    let i;
    let listItem;
    let shouldSwitch
    let switching = true;
  while (switching) {
    switching = false;
    listItem = document.getElementsByTagName('li');
    console.log(listItem);
    for (i = 0; i < (listItem.length - 1); i++) {
     shouldSwitch = false;
     console.log(listItem[i].innerText);
     console.log(listItem[i].value);

      if (listItem[i].innerText[0] < listItem[i + 1].innerText[0]) {
        console.log(listItem[i].innerHTML[0]);
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      listItem[i].parentNode.insertBefore(listItem[i + 1], listItem[i]);
      switching = true;
    }
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// "use strict"

// const ROOT = "https://api.jsonbin.io/v3/b/";
// const BIN_ID = "6015beb3014e36492231f1c8";

// const todoArray = [
//     {
//         "text": "An example to-do",
//         "priority": "1",
//         "date": 1611662776177
//     },
//     {
//         "text": "A second example to-do",
//         "priority": "4",
//         "date": 1611661776177
//     }
// ];



// async function get() {
    
//     const init = {
//         method: "GET"
//     }
//     const request = new Request(ROOT + BIN_ID + "/latest", init);
//     const response = await fetch(request);
//     const body = await response.json();
//     console.log(response);
//     console.log(body);
//     console.log(body.record["my-todo"]);
// }

// // get();

// async function put(data) {
    
//     const sendObject = {
//         "my-todo": data
//     };

//     const jsonString = JSON.stringify(sendObject);
    
//     const init = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: jsonString
//     }
//     const request = new Request(ROOT + BIN_ID, init);


//function that add or delete the task and the significance of the task
// function whichTaskToAddOrDeleteAndCountTask(){
//     let significance = document.getElementById("priority-selector").value;
//     let insideTheInput =significance + ' ' +new Date().toLocaleString() + ' ' + input.value;
//     input.value='';
//     const listItem=document.createElement('li')
//     const buttonDelete = document.createElement('button');
//     listItem.innerText = insideTheInput;
//     listItem.append(buttonDelete);
//     buttonDelete.innerText=' done! :)';
//     list.append(listItem);
//     countTasks++;
//     document.getElementById('counter').innerHTML = countTasks;
//     buttonDelete.onclick = function(e){

//        list.removeChild(listItem)
//     countTasks--;
//     document.getElementById('counter').innerHTML = countTasks;
//     }
//     input.focus();
// }

//function that resort the todo list by their to dos priority 
// function sortList (){
//     let i;
//     let listItem;
//     let shouldSwitch
//     let switching = true;
//   while (switching) {
//     switching = false;
//     listItem = list.getElementsByTagName('li');
//     for (i = 0; i < (listItem.length - 1); i++) {
//      shouldSwitch = false;
//       if (listItem[i].innerHTML[0] > listItem[i + 1].innerHTML[0]) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       listItem[i].parentNode.insertBefore(listItem[i + 1], listItem[i]);
//       switching = true;
//     }
//   }
// }

