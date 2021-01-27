const addButton = document.querySelector('button');
const ViewSection =  document.querySelector('section');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const itemList=document.createElement('li')

function whichTask(textInput){
     let insideTheInput = input.value;
     input.value= " "
        list.innerText= insideTheInput;
}

addButton.addEventListener('click', kindOfTask);