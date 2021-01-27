const addButton = document.querySelector('button');
const ViewSection =  document.querySelector('section');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const listItem = document.createElement('li')

function whichTaskToAddOrDelete(textInput){
    let insideTheInput = input.value;
    input.value=' '
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


addButton.addEventListener('click', whichTaskToAddOrDelete);
addButton.addEventListener('keypress', whichTaskToAddOrDelete) 

 