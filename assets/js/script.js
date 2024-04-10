document.addEventListener("DOMContentLoaded", function(){
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask(event){
        const taskText = taskInput.value.trim()
        // If input box is not empty then append a new li element
        if(taskInput !== ''){
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = ''; 
        }
    }

    // Event listener for add button
    // addBtn.addEventListener('click', addTask); 
    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        };
    })
})