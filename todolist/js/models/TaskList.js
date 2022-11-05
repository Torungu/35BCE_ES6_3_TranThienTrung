export class TaskList {
    arrTask = [];
    arrBtn = [];
    arrCompleteTask = [];
    addTask(task) {
        this.arrTask.push(task);
    }

    saveData = () => {
        let a = JSON.stringify(this.arrTask)
        localStorage.setItem('arrTask', a)
    }

    loadData = () => {
        if (localStorage.getItem('arrTask')) {
            this.arrTask = JSON.parse(localStorage.getItem('arrTask'))
        }
    }

    renderTask(selector) {
        let html = this.arrTask.reduce((content, task, currentIndex) => {
            return content += `<li>${task}
            <div><button class="btn btn-success text-white" id="${currentIndex}" onclick="completeTask('${currentIndex}')">✓</button><button class="btn btn-danger text-white ml-2" id="${currentIndex}" onclick="deleteTask('${currentIndex}')">✗</button></div>
            </li>`
        }, []);
        document.querySelector(selector).innerHTML = html;
    }

    deleteTask(id) {
        this.arrTask.splice(id, 1)
    }

    completeTask(id) {
        let completeTask = this.arrTask[id]
        this.arrCompleteTask.push(completeTask)
    }

    renderCompleteTask(selector) {
        let html = this.arrCompleteTask.reduce((content, task) => {
            return content += `<li class="bg-success">${task}
            </li>`
        }, []);
        document.querySelector(selector).innerHTML = html;
    }

    sapXepAdenZ() {
        this.arrTask.sort()
        this.arrCompleteTask.sort()
    }

    sapXepZdenA() {
        this.arrTask.reverse()
        this.arrCompleteTask.reverse()
    }
}