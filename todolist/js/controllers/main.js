import { TaskList } from '../models/TaskList.js'

let taskList = new TaskList()
taskList.loadData()
if (taskList.arrTask) {
    taskList.renderTask('#todo')
}
document.querySelector('#addItem').onclick = function () {
    let task = document.querySelector('#newTask').value;
    taskList.addTask(task);
    taskList.saveData()
    taskList.renderTask('#todo')
}

window.deleteTask = (btnId) => {
    for (let btn of taskList.arrBtn) {
        btn.onclick = () => {
            return btnId = btn.getAttribute('id')
        }
    }
    taskList.deleteTask(btnId)
    taskList.saveData()
    taskList.renderTask('#todo')
}

window.completeTask = (btnId) => {
    for (let btn of taskList.arrBtn) {
        btn.onclick = () => {
            return btnId = btn.getAttribute('id')
        }
    }
    taskList.completeTask(btnId)
    taskList.deleteTask(btnId)
    taskList.saveData()
    taskList.renderTask('#todo')
    taskList.renderCompleteTask('#completed')
}

document.querySelector('#two').onclick = () => {
    taskList.sapXepAdenZ()
    taskList.renderTask('#todo')
    taskList.renderCompleteTask('#completed')
}

document.querySelector('#three').onclick = () => {
    taskList.sapXepZdenA()
    taskList.renderTask('#todo')
    taskList.renderCompleteTask('#completed')
}