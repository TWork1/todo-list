import './base.css'
import './functionality/todo.js'
import { taskinfo } from './functionality/todo.js';

class Task {
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

document.querySelector('#task-creation').addEventListener('submit',(e)=>{
  e.preventDefault()
  document.querySelector('#form').close()
  taskinfo()
})

const dbutton = document.createElement('button');
dbutton.textContent = 'yes'
dbutton.addEventListener('click',()=>{
  document.querySelector('#form').show()
})
document.querySelector('body').appendChild(dbutton)