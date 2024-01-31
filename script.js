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
        
        let li = document.createElement('li')
        let liText = document.createElement('span')
        liText.innerHTML = inputBox.value
        li.appendChild(liText)
        taskList.appendChild(li)

        let buttonContainer = document.createElement('div')
        buttonContainer.classList.add('buttons-tasks')

        let edit = document.createElement("button")
        edit.innerHTML = "✏️"
        buttonContainer.appendChild(edit)

        let check = document.createElement("button")
        check.innerHTML = "❌"
        buttonContainer.appendChild(check)

        li.appendChild(buttonContainer)
        taskList.appendChild(li)

        check.addEventListener('click', () => {
            li.remove()
        })

        edit.addEventListener('click', () => {
            let novaFrase = prompt('Digite aqui: ')

            if(novaFrase.length <= 0) {
                alert('Necessário digitar algo')
                return
            } else if(novaFrase.length >= 100) {
                alert('Você não pode digitar mais que 100 caracteres') 
            } else {
                liText.innerHTML = novaFrase
                return
            }
        })

        clearInputBox()
    }
}

function clearInputBox() {
    inputBox.value = ''
}