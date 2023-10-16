document.addEventListener("DOMContentLoaded", function(){

    const taskBtn = document.getElementById("taskBtn");
    const deleteTaskBtn = document.getElementById("deleteTaskBtn");
    const taskInput = document.getElementById("taskInput");


    taskBtn.addEventListener("click", addTask);
    deleteTaskBtn.addEventListener("click", deleteTaskBtn);

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

        /*Crear elementos li con una constante y createElement*/

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const taskLabel = document.createElement("label");

        /*Crear atributos para esa etiqueta de li cuando las cree*/

        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        taskLabel.textContent=

        


    }

    function deleteTaskBtn() {



    }








});