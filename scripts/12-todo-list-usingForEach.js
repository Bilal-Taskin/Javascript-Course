
const toDoList=[{
   name:'abc',
   dueDate:'2022-12-22'},
   {
   name:'def',
   dueDate:'2022-12-22'}
   ];
renderToDoList();   



function renderToDoList(){
    //This called generate html technique. As we can understand here this project a bit higher than rock-paper-scissor procets becasue html coces which we needed in the html side for rock-paper-scissor, but for this project we send some html tags from scrip side to html side.
 let toDoListHtml ='';
    
 toDoList.forEach((toDoObject, index)=>{
    
         //we have a problem here. The Delete button just a string in here so we can't add eventlistener to delete button and also delete button is more than one in our page and we can just select a singel eleman ny using documennt.queryselector. To solving for two problem we used document.quryselectoAll 
        const {name, dueDate} = toDoObject;
        let html = `
         <div>${name}</div>
         <div>${dueDate}</div>
            <button class="delet-todo-button js-toDo-delete-button">Delete</button>
         `;

        toDoListHtml += html ;
 });
 


document.querySelector('.js-todo-list').
innerHTML = toDoListHtml;


document.querySelectorAll('.js-toDo-delete-button').
forEach((deleteButton, index) => {
   deleteButton.addEventListener('click', ()=>{
         toDoList.splice(index, 1);
            renderToDoList();
   })
});
}


document.querySelector('.js-add-toDo-button').addEventListener('click', ()=>{
   addToDo();
})

function addToDo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement=document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;
   
   toDoList.push({
      //name:name,
      //dueDate:dueDate
      //isimler aynı ise aşağıdaki gibi kısa yolla da tanımlanabilirler
      name,
      dueDate
   });
 

   inputElement.value='';

   renderToDoList();
}