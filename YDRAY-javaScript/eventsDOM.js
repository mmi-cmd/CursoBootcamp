// JSON -> JavaScript Object Notation 
// XML - AJAX -> Asyncronous JavaScript and XML

let todos = [
  {
    task: "No apostarle a Colombia",
    done: false
  },
  {
    task:"Comprar las cervezas",
    done: true
  }
]

const input = document.querySelector(".add-container input")
const taskContainer = document.querySelector('.task-container')

taskContainer.addEventListener("click",function(e){
  const elm = e.target //e.target indica quien hace el evento de los que contiene el padre

  if (elm.classList.contains('task')) {
    console.log('este es', elm.dataset.id)
  }
})




const btn = document.getElementById("add-btn")

btn.addEventListener("click", function (e) {

  let text = input.value.trim()

  if (text != '') { //validar que no se ingresen input en blanco ni con espacios
    
  const newTask = {
    task: text,
    done: false
  }
  todos.push(newTask) //agrega al final de la lista la nueva tarea 

  input.value = '' //borra la tarea una vez se agregue

  //uso de string template para traer el codigo html como un string a js
  //${text} se interpola un valor = inserta el texto agregado en el input visualmente a la pagina
  const newElements = ` 
     <div class="task" data-id="${todos.length - 1}">
        ${text} 
        <span>
          <input type="checkbox">
          <span>X</span>
        </span>
      </div>
  `

  //insertAdjacentHTML convierte un texto y lo agrega al html
  taskContainer.insertAdjacentHTML("beforeend", newElements)
  }

  console.log(todos)  
  //console.log("Presionaste!", e)
  

})