
const toDoList=[{
   name:'a',
   dueDate:'2022-12-22'},
   {
   name:'d',
   dueDate:'2022-12-22'}
   ];
renderToDoList();   



function renderToDoList(){
    //This called generate html technique. As we can understand here this project a bit higher than rock-paper-scissor procets becasue html coces which we needed in the html side for rock-paper-scissor, but for this project we send some html tags from scrip side to html side.
 let toDoListHtml ='';
    
 for(let i =0; i< toDoList.length; i++){
        let toDoObject = toDoList[i];
        
        //const name = toDoObject.name;
        //const dueDate = toDoObject.dueDate;
        // aşağıdakinin uzun hali yukarıda
        
        //const {name} = toDoObject;
        //const {dueDate} = toDoObject;
        //bu da aşağıdkinin uzun hali

        const {name, dueDate} = toDoObject;


      // bu kullanım yerine div li kullanım yapmamızın nedeni div hiç bir default style'ı yoktur ve ekleecek style elemenletlerin kolayca uyum sağlar
        
      //   let html = `
        
      //   <p>
      //    ${name}  ${dueDate}
        
      //    <button onclick="
      //    toDoList.splice(${i}, 1);
      //    renderToDoList()
      //    ">Delete</button>
      //   </p>`;

      let html = `
         <div>${name}</div>
         <div>${dueDate}</div>
            <button onclick="
            toDoList.splice(${i}, 1);
            renderToDoList();
         " class="delet-todo-button">Delete</button>
         `;

        toDoListHtml += html ;
}


document.querySelector('.js-todo-list').
innerHTML = toDoListHtml;
}




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