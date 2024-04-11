document.addEventListener("DOMContentLoaded", function(){
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask(){
        const taskText = taskInput.value.trim()
        // If input box is not empty then append a new li element
        if(taskText !== ''){
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

    function removeTask(event){
        const li = event.target.parentElement;
        const index = Array.from(li.parentNode.children).indexOf(li);
        li.remove();
        // Remove task from local storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listener for add button
    addBtn.addEventListener('click', addTask); 
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

    taskList.addEventListener('click', function(event){
        const target = event.target;
        if (target.tagName === "LI"){
            target.classList.toggle('done');
            if (target.classList.contains('done')){
                const removeBtn = document.createElement('button');
                removeBtn.textContent = '-';
                removeBtn.classList.add('removeTask');
                target.appendChild(removeBtn);
            } else {
                const removeBtn = document.querySelector('.removeTask');
                if (removeBtn){
                    removeBtn.remove();
                }
            }
        } else if (target.classList.contains('removeTask')){
            removeTask(event);
        }
    })
})