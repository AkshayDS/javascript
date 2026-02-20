let todolist= [];
displayItems();


function addTodo(){
  let inputElement = document.querySelector('#todo-inputs');
  let todoitem=inputElement.value;
  todolist.push(todoitem);
  inputElement.value='';
  displayItems();

}
function displayItems(){ 
  let displayElement = document.querySelector('#todo-items');
  displayElement.innerText='';
  for(let i=0; i < todolist.length; i++){
    displayElement.innerText = displayElement.innerText + "\n" + todolist[i];
  }

}
  