document.addEventListener("DOMContentLoaded", function(){


    
    // Agrega un evento al botón en JavaScript
    const taskBtn = document.getElementById("taskBtn"); // Reemplaza "taskBtn" con el ID de tu botón.
    taskBtn.addEventListener("click",addTask);

    // Agrega un evento al botón "Limpiar Tareas" en JavaScript
    const clearTasks = document.getElementById("clearTasks");// Reemplaza "clearTasks" con el ID de tu botón.
    clearTasks.addEventListener("click",clearAllTasks);



    /*Keyup para que reconozca tecla del teclado y le metes event
    para al presionar enter añada  */
    // Agrega un evento para detectar la tecla "Enter" en el campo de entrada

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

        /*Crear atributos para esa etiqueta de li cuando las cree*/
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        const taskLabel = document.createElement("label");
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

    function clearAllTasks() {
        // Obtén todas las tareas
        const tasks = document.querySelectorAll("li");
    
        // Recorre todas las tareas y elimínalas
        for (let i = 0; i < tasks.length; i++) {
            taskList.removeChild(tasks[i]);
        }







    }
});