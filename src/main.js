/*check the big number in array => when the keys are [0,1,2,3] and i delete the key 0 => [1,2,3] the length of this is 3
,so when i want to setItem i cant set on 3 because 3 is Exists in the array so i need it to be +1 => [1,2,3,4]
*/
function bigInArray(array){
  let big = 0;
  for(let i = 0 ; i<array.length;i++){
  if(array[i] >= big){
  big = Number(array[i])+1;
  }
  }
  return big;
  }

//query elements and Defining values..
const addButton = document.getElementById('add-button');
const sortButton = document.getElementById('sort-button');
const ViewSection =  document.querySelector('section');
const input = document.querySelector('input');
const list = document.querySelector('ul');
let countTasks = 0;
let significance =document.getElementById("priority-selector").value;
countData = 0;//-the key of the data
lengthKeys = 0;
keys = Object.keys(localStorage);//-a array of the keys of the data


 function whichTaskToAddOrDeleteAndCountTask(significance,date,Text,id){
  const listItem = document.createElement("li");
  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add("buttonDelete");
  buttonDelete.innerHTML = '<button class = "fa fa-trash fa-2x"></button>';
  const buttonUpdate = document.createElement('button');
  buttonUpdate.classList.add('button');
  buttonUpdate.classList.add('buttonUpdate');
  const todoContainer = document.createElement('div');
  todoContainer.classList.add("todo-container");
  const todoPriority = document.createElement('div');
  todoPriority.classList.add("todo-priority");
  todoPriority.innerText =significance;
  const todocreatedAt = document.createElement('div');
  todocreatedAt.classList.add("todo-created-at");
  todocreatedAt.innerText =date;
  const todoText = document.createElement('div');
  todoText.classList.add("todo-text");
  todoText.innerText =Text;
  todoContainer.append(todoPriority);
  todoContainer.append(" ");
  todoContainer.append(todocreatedAt);
  todoContainer.append(". ");
  todoContainer.append(todoText); 
  todoContainer.append(" ");
  input.value='';
  listItem.append(todoContainer);
  listItem.append(" " + " ")
  buttonUpdate.innerText = "Update";
  listItem.append(buttonDelete);
  listItem.append(buttonUpdate);
  listItem.setAttribute('id',id);
  list.append(listItem);
  countTasks++;
  document.getElementById('counter').innerHTML = countTasks;
  buttonDelete.onclick = function(e){
  localStorage.removeItem(listItem.getAttribute('id'));
  list.removeChild(listItem);
  countTasks--;
  document.getElementById('counter').innerHTML = countTasks;
  }
  buttonUpdate.onclick = function(e){
    if (input.value !== '' && Number(significance)){
    countTasks--;
    list.removeChild(listItem);
    let significance =document.getElementById("priority-selector").value;
    whichTaskToAddOrDeleteAndCountTask(significance,new Date().toLocaleString(),input.value,listItem.getAttribute('id'))
    }
    else{
    alert("Make sure you insert data");
    }
    }
  input.value='';
  input.focus();
 }

 if (localStorage.length !== 0) {
  lengthKeys = keys.length;
  minkeys = keys.sort();
  for(let i = 0 ; i < localStorage.length;i++){
  Data = localStorage.key(i);
  Data = JSON.parse(localStorage.getItem(Data));
  whichTaskToAddOrDeleteAndCountTask(Data.significance,Data.data,Data.Text,minkeys[i]);
  }
  countData = bigInArray(keys);
  }
  //to order the button that when we click on him do this function.
  //function that add the information from the user to localStorage and to the TaskManger
  if(document.getElementById("priority-selector").value !== null){
    document.getElementById("add-button").onclick = function() {
    let significance =document.getElementById("priority-selector").value;
    if( Number(significance) && input.value !== ''){
    let obj =  JSON.stringify({ significance: significance, data: new Date().toLocaleString(), Text: input.value });
    console.log('the keys = ' , keys, 'the key(countData)=',countData);
    localStorage.setItem(countData, obj);
    whichTaskToAddOrDeleteAndCountTask(significance,new Date().toLocaleString(),input.value,countData);
    countData++;
    keys = Object.keys(localStorage);
    lengthKeys = keys.length;
    }
    else{
    alert("Make sure you not missing data");
    }
    };
 //to order the input that when we keypress on the enter key do this function.
 if(significance !== "--Select the level of significance of your task--" && input.value!== ""){
  input.addEventListener('keypress',  (e) => {
  if (e.key === 'Enter')
  {whichTaskToAddOrDeleteAndCountTask()}
  });
  }
//function that resort the todo list by their to dos priority 
function sortList (){
    let i;
    let listItem;
    let shouldSwitch
    let switching = true;
  while (switching) {
    switching = false;
    listItem = document.getElementsByTagName('li');
    for (i = 0; i < (listItem.length - 1); i++) {
     shouldSwitch = false;
      if (listItem[i].innerText[0] < listItem[i + 1].innerText[0]) {
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
}
