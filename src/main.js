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
input = document.getElementById('text-input');
const list = document.querySelector('ul');
SearchTask = document.getElementById('search');
let countTasks = 0;
let significance =document.getElementById("priority-selector").value;
countData = 0;//-the key of the data
lengthKeys = 0;
keys = Object.keys(localStorage);//-a array of the keys of the data


 function whichTaskToAddOrDeleteAndCountTask(significance,date,Text,id){
  //creat a checkbox Per line
  let checkboxC = document.createElement('input');
  checkboxC.type = "checkbox";
  checkboxC.name = "name";
  checkboxC.value = "value";
  checkboxC.id = "checkboxC";
  //creat the line in the list & divs & button with classnames
  const listItem = document.createElement("li");
  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add("buttonDelete");
  checkboxC.classList.add("checkbox");
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
  //append all the elements to li and in the end to ul(include button and divs).
  todoContainer.append(todoPriority);
  todoContainer.append(" ");
  todoContainer.append(todocreatedAt);
  todoContainer.append(" ");
  todoContainer.append(todoText); 
  todoContainer.append(" ");
  input.value='';
  listItem.append(todoContainer);
  listItem.append(" " + " ")
  buttonUpdate.innerText = "Update";
  listItem.append(buttonDelete);
  listItem.append(checkboxC);
  listItem.append(buttonUpdate);
  listItem.setAttribute('id',id);
  list.append(listItem);
  //here is were the counts Happens.
  countTasks++;
  document.getElementById('counter').innerHTML = countTasks;
  //A function that Happened at click of a button that call delete, and when the function running the tasks from the page
  //  and form the local Storage delete. And the count is updated with each deletion.
  buttonDelete.onclick = function(e){
  localStorage.removeItem(listItem.getAttribute('id'));
  list.removeChild(listItem);
  countTasks--;
  document.getElementById('counter').innerHTML = countTasks;
  }
  //A function that Happened at click of a button that call Update.
  //And when the function is running it allows you to update the details of the task.
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
//A function that Happened at click on a checkbox And she draws a line on the task To show that the task is complete.
    checkboxC.onclick = function(e){
      if(checkboxC.checked === true){
      todoText.style = "text-decoration:line-through;";
      }
      else{
      todoText.style = "none;";
      }
      }
  input.value='';
  input.focus();
 }


  //function that add the information from the user to localStorage and to the TaskManger
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
//A function that Happened at click of a button that call search, And its action is to look for a task that exists. 
    document.getElementById('search-button').onclick = function(){
      let x=" ";
      SearchItem = SearchTask.value;
      div = document.getElementById('alert');
      for(let i = 0 ; i <localStorage.length;i++){
      let Data = localStorage.key(i);
      Data = JSON.parse(localStorage.getItem(Data));
      if(Data.Text === SearchItem){
      x=("TaskName=>"+Data.Text+' '+'TaskDate =>'+Data.data+' '+ 'Significance =>' + Data.significance);
      break;
      }
      else{
      x=("don'tExists in the todoTask");
      }
      }   
      alert(x);  
      };

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
