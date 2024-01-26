const addTaskBt = document.querySelector('#add-button')
const inputBox = document.querySelector('#input-box')
const taskList = document.querySelector('#task-list')

addTaskBt.addEventListener('click', () => {
    addTask()
})

function addTask() {
    if(inputBox.value === '') {
        alert('Você precisa digitar algo')
        return
    } else if(inputBox.value.length > 100) {
        alert('Você não pode digitar mais que 100 caracteres') 
        clearInputBox()
        return
    } else {
        
        let li = document.createElement("li")
        let novaFrase = document.createElement("li");

        li.innerHTML = inputBox.value

        taskList.appendChild(li)

        let check = document.createElement("button")
        check.innerHTML = "❌"
        li.appendChild(check)

        check.addEventListener('click', () => {
            li.remove()
        })

        let edit = document.createElement("button")
        edit.innerHTML = "✏️"
        li.appendChild(edit)

        edit.addEventListener('click', () => {
            let novaFrase = prompt('Digite aqui: ')

            if(novaFrase.length <= 0) {
                alert('Necessário digitar algo')
                return
            } else if(novaFrase.length >= 100) {
                alert('Você não pode digitar mais que 100 caracteres') 
            } else {
                li.innerHTML = novaFrase
                
            }
        })

        clearInputBox()
    }
}

function clearInputBox() {
    inputBox.value = ''
}