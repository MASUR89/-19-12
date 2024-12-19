//acync, await - 
setTimeout(() => {
async function fetchData() {
    try {
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
        const postId = await comments.json();
        console.log(postId);
    } catch (error) {
        console.error(error);
    }
}
fetchData();
}, 3000);

//----------------------
const input = document.getElementById("taskInput");
const button1 = document.getElementById("addTask");
const tasks = document.getElementById("taskList");

button1.addEventListener('click', () => {
    const task = input.value.trim();

    if (task !== "") {
        addTaskToList(task);
        saveTask(task);
        task.value = "";
    }else {
        alert("Enter task");
    }


})
function addTaskToList(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    tasks.appendchild(listItem);
}

function saveTask (task) {
    let taskebi = JSON.parse(localStorage.getItem('taskebi')) || [];
    taskebi.push(task);
    localStorage.setItem('taskebi', JSON.stringify(taskebi));
}

function loadTasks () {

}