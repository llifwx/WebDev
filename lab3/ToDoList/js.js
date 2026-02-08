// select necessary elements from the HTML
const todoForm = document.querySelector('.todo_form');
const todoInput = document.querySelector('.taskInput');
const todoList = document.querySelector('.todo_item');

// load saved from LocalStorage or initialize an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// save todos to LocalStorage and update
function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos)); // save to LocalStorage
    renderTodos(); // show tasks on the screen
  }

// display all todos in a list
function renderTodos() {
    todoList.innerHTML = ''; // clear the list before re-adding items

    todos.forEach(todo => {
      // create a new <li> element for each task
      const li = document.createElement('li');
      li.classList.add('item');
      li.setAttribute('data-id', todo.id);

      // if the task is completed, add the 'checked' class to apply styling
      if (todo.completed) {
        li.classList.add('checked');
      }

      // add HTML inside <li>: checkbox, task text, and delete button
      li.innerHTML = `
        <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
        <span class="task-text">${todo.name}</span>
        <button class="deleteButton">🗑</button>
        `;


      todoList.appendChild(li); // add the <li> to the <ul>
    });
  }

  // function to add a new task
  todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from refreshing the page

    const taskName = todoInput.value.trim(); // get inpute1kan value and remove extra spaces
    if (taskName === '') return; // stop if input is empty

    const newTask = {
      id: Date.now(), // unique ID based on the current time
      name: taskName, // task name from input
      completed: false // default: not completed
    };

    todos.push(newTask); // add the new task to the array
    saveAndRender(); // save and update the screen

    todoInput.value = ''; // clear input field after adding
  });

  // checking and deleting tasks
  todoList.addEventListener('click', function(event) {
    const clickedElement = event.target; // get the clicked element
    const taskElement = clickedElement.closest('li'); // find the parent <li>
    const taskId = taskElement?.getAttribute('data-id'); // get the task's ID

    if (!taskId) return; // stop if there's no valid task ID

    // toggle task completion when checkbox is clicked
    if (clickedElement.classList.contains('checkbox')) {
      const task = todos.find(todo => todo.id == taskId);
      task.completed = !task.completed; // toggle completed state
      saveAndRender();
    }

    // delete task when delete button is clicked
    if (clickedElement.classList.contains('deleteButton')) {
      todos = todos.filter(todo => todo.id != taskId); // remove task from array
      saveAndRender();
    }
});

renderTodos();