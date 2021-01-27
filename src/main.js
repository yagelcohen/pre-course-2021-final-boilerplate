//query elements and create some...
const addButton = document.querySelector('button');
const ViewSection =  document.querySelector('section');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const listItem = document.createElement('li')

//function that add or delete the task and the significance of the task
function whichTaskToAddOrDelete(textInput){
    let significance = document.getElementById("priority-selector").value;
    let insideTheInput =significance + ' ' + input.value;
    input.value=' ';
    const listItem=document.createElement('li')
    const buttonDelete = document.createElement('button');
    const span=document.createElement('span')
    span.innerText = insideTheInput;
    listItem.append(span); listItem.append(buttonDelete);
    buttonDelete.innerText=' done! :)';
    list.append(listItem);
    buttonDelete.onclick = function(e){
       list.removeChild(listItem)
    }
    input.focus();
}
//to order the button that when we click on him do this function.
addButton.addEventListener('click', whichTaskToAddOrDelete);

//to order the input that when we keypress on the enter key do this function.
input.addEventListener('keypress',  (e) => {
    if (e.key === 'Enter')
    {whichTaskToAddOrDelete()}
});