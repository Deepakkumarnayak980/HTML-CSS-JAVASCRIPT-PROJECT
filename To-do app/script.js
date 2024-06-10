document.querySelector('#push').onclick = function() {
    let taskInput = document.querySelector('.newtask input');
    if (taskInput.value.length == 0) {
        alert("Please enter a task");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
           <span id="taskname">
           ${taskInput.value}
           </span>
           <button class="delete">
           <i class="far fa-trash-alt"></i>
           </button>
        </div>
        `;

        // Add event listener to all delete buttons
        let deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach(button => {
            button.onclick = function() {
                this.parentNode.remove();
            };
        });

        // Add event listener to all tasks to toggle the completed class
        let tasks = document.querySelectorAll(".task");
        tasks.forEach(task => {
            task.onclick = function() {
                this.classList.toggle('completed');
            };
        });

        // Clear the input field
        taskInput.value = "";
    }
}
