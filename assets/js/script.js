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

            // Save tasks to local storage
            // Retrieve tasks from local storage or initialize an empy array
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            // Add new tasks to the tasks array
            tasks.push(taskText);
            // Save the updated tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // Event listener for add button
    // addBtn.addEventListener('click', addTask); 
    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        };
    });

    function LoadFromLocalStorage(){
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(task){
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    // Load tasks from local storage
    LoadFromLocalStorage();
})