const todoList = document.querySelector("#todoList");

todoList.addEventListener("click", function (event) {
    if (event.target.type === "checkbox") {
        if (event.target.checked === true) {
            event.target.closest(".todo-item").classList.add("todo-completed");
        } else {
            event.target.closest(".todo-item").classList.remove("todo-completed");
        }
    }

    if (event.target.closest(".star")) {
        if (event.target.closest(".star-active")) {
            event.target.closest(".todo-item").classList.remove("star-active");
        } else {
            event.target.closest(".todo-item").classList.add("star-active");
        }
    }

    if (event.target.closest(".edit")) {
        const todoItem = event.target.closest(".todo-item");
        if (todoItem !== null) {
            const todoTitle = todoItem.querySelector(".todo-title");
            if (todoTitle !== null) {
                todoTitle.style.display = "none";
            }

            const titleInput = todoItem.querySelector(".titleInput");
            if (titleInput !== null) {
                titleInput.style.display = "block";
            }
        }
    }
});

todoList.addEventListener("keydown", function (event) {
    if (event.target.classList.contains("titleInput")) {
        if (event.key === "Enter") {
            const todoItem = event.target.closest(".todo-item");
            if (todoItem !== null) {
                const title = todoItem.querySelector(".todo-title");
                const titleInput = event.target;
                const value = titleInput.value;
                title.textContent = value;
                titleInput.style.display = "none";
                title.style.display = "block";
            }
        }
    }

});

const cancelButton = document.querySelector(".add-todo-cancel");
cancelButton.addEventListener("click", function () {
    clear();
});

function clear() {
    const title = document.querySelector("#addTitle");
    let addTitleInput = document.querySelector("#addTitleInput");
    addTitleInput.value = "Type Something Here…";

    let checkBox = document.querySelector("#checkBox");
    const addTodo = document.querySelector(".add-todo");
    if (checkBox.checked === true) {
        checkBox.checked = false;
        addTodo.classList.remove("todo-completed");
    }

    if (addTodo.classList.contains("star-active")) {
        addTodo.classList.remove("star-active");
    }

    const date = document.querySelector("#date");
    const time = document.querySelector("#time");
    date.value = "";
    time.value = "";

    const comment = document.querySelector("#comment");
    comment.value = "";
}



const addTaskButton = document.querySelector(".add-todo-task");
addTaskButton.addEventListener("click", function () {
    const title = document.querySelector("#addTitle").textContent;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const comment = document.querySelector("#comment").value;
    const checkBox = document.querySelector("#checkBox").checked;

    let todoClassName = "";
    let checked = "";
    if (checkBox === true) {
        checked = 'checked="true"';
        todoClassName = "todo-completed";
    }

    let todoClassName2 = "";
    const addTodo = document.querySelector(".add-todo");
    if (addTodo.classList.contains("star-active")) {
        todoClassName2 = "star-active";
    }

    const newTodo = `
        <div class="todo-item ${todoClassName} ${todoClassName2}">
            <div class="todo-item-header">
                <input type="checkbox" ${checked}>
                <div class="todo-title">${title}</div>
                <input type="text" class="titleInput" value="Type Something Here…">
                <div class="star">
                    <i class="far fa-star star-off"></i>
                    <i class="fas fa-star star-on"></i>
                </div>
                <div class="edit">
                    <i class="fas fa-pen"></i>
                </div>
            </div>
            <div class="todo-information">
                <div class="date">
                    <i class="far fa-calendar-alt"></i>
                    ${date} ${time}
                </div>
                <div class="file">
                    <i class="far fa-file"></i>
                </div>
                <div class="comment">
                    <i class="far fa-comment-dots"></i>${comment}
                </div>
            </div>
        </div>
    `;

    const todoItem = document.querySelectorAll(".todo-item");
    todoList.insertAdjacentHTML("beforeend", newTodo);

    let count = document.querySelector(".count");
    count.textContent = `${todoItem.length} tasks left`;

    clear();
});

