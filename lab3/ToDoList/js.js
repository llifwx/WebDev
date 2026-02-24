const todoForm = document.querySelector('.todo_form');
const todoInput = document.querySelector('.taskInput');
const todoList = document.querySelector('.todo_item');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(); 
  }


function renderTodos() {
    todoList.innerHTML = ''; 

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.classList.add('item');
      li.setAttribute('data-id', todo.id);

      if (todo.completed) {
        li.classList.add('checked');
      }

      li.innerHTML = `
        <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
        <span class="task-text">${todo.name}</span>
        <button class="editButton">✏️</button>
        <button class="deleteButton">🗑</button>
      `;



      todoList.appendChild(li); 
    });
  }

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = todoInput.value.trim();
    if (taskName === '') return; 

    const newTask = {
      id: Date.now(), 
      name: taskName, 
      completed: false 
    };

    todos.push(newTask); 
    saveAndRender(); 

    todoInput.value = '';
  });

  todoList.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const taskElement = clickedElement.closest('li'); 
    const taskId = taskElement?.getAttribute('data-id');

    if (!taskId) return; 

    
    if (clickedElement.classList.contains('checkbox')) {
      const task = todos.find(todo => todo.id == taskId);
      task.completed = !task.completed;
      saveAndRender();
    }

    
    if (clickedElement.classList.contains('deleteButton')) {
      todos = todos.filter(todo => todo.id != taskId); 
      saveAndRender();
    }

    if (clickedElement.classList.contains('editButton')) {
      const task = todos.find(todo => todo.id == taskId);

      const newText = prompt('Edit your task:', task.name);

      if (newText !== null && newText.trim() !== '') {
        task.name = newText.trim();
        saveAndRender();
      }
  }

});

  
renderTodos();