document.addEventListener("DOMContentLoaded", function(){

    const taskBtn = document.getElementById("taskBtn");
    const deleteTaskBtn = document.getElementById("clearTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");


    taskBtn.addEventListener("click", addTask);
    deleteTaskBtn.addEventListener("click", clearTasks);

    /*Keyup para que reconozca tecla del teclado y le metes event
    para al presionar enter añada  */

    taskInput.addEventListener("Keyup", function (event){

        /* Operador ternario añado evento de teclado igual a enter
        meto el ? addtask() para añadir lista y le meto el null  
        para cualquier otra tecla no haga nada */
        (event.key === "Enter") ? addTask() : null;


    });



    function addTask() {

        /*Crear la constante con la de input y pasarlo a valor y trim
        para los espacios  */
        
        const taskText = taskInput.value.trim();

        /*Si esta vacio muestrame un alert*/
        
        if (taskText === "") {
          alert("Introduzca una tarea");
          return;
        }

        /*Crear elementos li con una constante y createElement*/

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const taskLabel = document.createElement("label");

        /*Crear atributos para esa etiqueta de li cuando las cree*/

        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        taskLabel.textContent=taskText;

        /*Esto es para que se realice un cambio */

        checkbox.addEventListener("change", function(){
            /* Que aparezca la palomilla,
             usas el toggle y checkbox.checked*/
            taskLabel.classList.toggle("completed",checkbox.checked);

        });
        
        li.appendChild(checkbox);
        li.appendChild(taskLabel);

        taskList.appendChild(li);

        /* Para resetear*/ 
        taskInput.vallue = "";
        /*Cuando des enter el cursor salga*/
        taskInput.focus();

        

    }

    function clearTasks() {
        const tasks = document.querySelectorAll("li");

        for( let i=0; i<task.length; i++ ){

            taskList.removeChild(task[i]);
        }


    }








});