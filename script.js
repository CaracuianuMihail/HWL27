async function fetchData() {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();

    const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await todosResponse.json();

    return {users, todos};
}

async function displayData(){
    const {users, todos} = await fetchData();
    const usersContainer = document.getElementById('users');

    users.forEach( (user,index) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `<h2>${index + 1}. ${user.name}</h2><ol></ol>`;

        const todoList = userDiv.querySelector('ol');

        todos.forEach(todo => {
        if(todo.userId === user.id){
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `<span>${todo.title}</span>`
        if(todo.completed){
            todoItem.innerHTML += '<img src="complete_icon.png" alt="checked" class="check-icon">';
            todoItem.style.textDecoration = 'line-through';
        }
        todoList.appendChild(todoItem);
    }
    });
    usersContainer.appendChild(userDiv);
});
}
    displayData();




        