const toAdd = document.querySelector(".add");
const ulHtml = document.querySelector(".todo-list");
const delTodo = document.querySelector(".delete");
const toSearch = document.querySelector(".search");

//console.log(delTodo);
const addTodos = (todo) =>{
    toAdd.reset();
    const liHtml = `<li class="list-group-item d-flex justify-content-between">
                        <span>${todo}</span>
                        <i class="fas fa-trash-alt delete"></i>
                    </li>`
    ulHtml.innerHTML += liHtml;
}

toAdd.addEventListener('submit', e=>{
    e.preventDefault();
    const addText = e.target.firstElementChild.value.trim();
    if (addText.length){
        addTodos(addText);  
    }
    
})

ulHtml.addEventListener('click', e=>{
    e.preventDefault();
    //console.log(e);
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove(); 
    }
})

toSearch.addEventListener('keyup', e=>{
    e.preventDefault();
    const todoList = document.querySelectorAll("span");
    const filterItem = e.target.value;
    //console.log(filterItem);
    todoList.forEach(todo => {
      if (todo.innerText.includes(filterItem)){
          todo.parentElement.classList.add('d-flex');
          todo.parentElement.classList.remove('d-none');
          //console.log(todo.parentElement.classList) ;    
      }else{
        todo.parentElement.classList.add('d-none'); 
        todo.parentElement.classList.remove('d-flex'); 
        //console.log(todo.parentElement.classList)
      }  
    });
})
toSearch.addEventListener('submit', e=>{
    e.preventDefault();
})
