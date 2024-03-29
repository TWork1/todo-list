import './base.css'
import './functionality/todo.js'
import { clearform, dialogform, taskinfo } from './functionality/todo.js';

class Task {
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
//creates dialog form
dialogform()

const dbutton = document.createElement('button');
dbutton.textContent = 'yes'
dbutton.addEventListener('click',()=>{
  document.querySelector('#form').show()
  clearform()
})
document.querySelector('body').appendChild(dbutton)

document.querySelector('#task-creation').addEventListener('submit',(e)=>{
  e.preventDefault()
  document.querySelector('#form').close()
  taskinfo()
})