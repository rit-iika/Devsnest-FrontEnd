var inpt=document.querySelector('input')
var btn=document.querySelector('button')
var list=document.querySelector('.todolist')

var todos=[
    {
        title:"homework",
        disc:"work work"
    },
    {
        title:"mumma help",
        disc:"lets do it"
    }
]
function loadTodo(){
    todos.map(todo => {
        console.log(todo.title);
        console.log(todo);
    })
}
loadTodo();



btn.addEventListener('click',()=>{
    var newT=document.createElement('div');
    newT.innerHTML=inpt.value;
    list.appendChild(newT)
    inpt.value=""
    // console.log(inpt.value);

})

localStorage.setItem('todo',todos);