const addTaskBt = document.querySelector('#add-button')
const inputBox = document.querySelector('#input-box')
const taskList = document.querySelector('#task-list')

addTaskBt.addEventListener('click', () => {
    addTask()
})

function addTask() {
    if(inputBox.value === '') {
        alert('Você precisa digitar algo')
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        taskList.appendChild(li)
    }
}
