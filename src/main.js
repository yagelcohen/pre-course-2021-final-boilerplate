//query elements and Defining values..
const addButton = document.getElementById('add-button');
const sortButton = document.getElementById('sort-button');
const ViewSection =  document.querySelector('section');
const input = document.querySelector('input');
const list = document.querySelector('ul');
let countTasks = 0;


//function that add or delete the task and the significance of the task
function whichTaskToAddOrDeleteAndCountTask(){
    let significance = document.getElementById("priority-selector").value;
    let insideTheInput =significance + ' ' + input.value;
    input.value='';
    const listItem=document.createElement('li')
    const buttonDelete = document.createElement('button');
    listItem.innerText = insideTheInput;
    listItem.append(buttonDelete);
    buttonDelete.innerText=' done! :)';
    list.append(listItem);
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

function sortList (){
    let  i, switching, ListItem, shouldSwitch;
    switching = true;
  while (switching) {
    switching = false;
    listItem = list.getElementsByTagName('li');
    for (i = 0; i < (listItem.length - 1); i++) {
      shouldSwitch = false;
      if (listItem[i].innerHTML.toLowerCase()[0] > listItem[i + 1].innerHTML.toLowerCase()[0]) {
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

console.log(new Date().toLocaleString());