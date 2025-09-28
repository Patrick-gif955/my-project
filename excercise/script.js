document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todo-form")
    const input = document.getElementById("todo-input")
    const list = document.getElementById("todo-list")
    const clearButton = document.getElementById("clear-button")

    // Load todos from localStorage
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem("todos")) || []
        list.innerHTML = ""
        todos.forEach(taskText => {
            addListItem(taskText)
        })
    }

    // Save todos to localStorage
    function saveTodos() {
        const todos = []
        list.querySelectorAll("li").forEach(li => {
            todos.push(li.firstChild.textContent)
        })
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    // Add a list item with a remove button
    function addListItem(taskText) {
        const listItem = document.createElement("li")
        listItem.textContent = taskText

        const removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove"
        removeBtn.style.marginLeft = "10px"
        removeBtn.addEventListener("click", function() {
            listItem.remove()
            saveTodos()
        })

        listItem.appendChild(removeBtn)
        list.appendChild(listItem)
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        const taskText = input.value.trim()
        if (taskText !== "") {
            addListItem(taskText)
            saveTodos()
            input.value = ""
        }
    })

    clearButton.addEventListener("click", function() {
        list.innerHTML = ""
        saveTodos()
    })

    loadTodos()
})