import './test.css'

const dialogform =()=>{
    const dialogf = document.createElement('div');
    dialogf.innerHTML= `
    <dialog id="formt">
    <fieldset>
        <form method="dialog" id="task-creation">
            <legend>Task Creation</legend>
            <label for="title">Title</label>
            <input type="text" id="title">
            <label for="priority">Priority</label>
            <select id="priority" name="priority">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
            <label for="description">description</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
            <button type="submit" id="submit">submit</button>
        </form>
    </fieldset>
    </dialog>`
testTask.appendChild(dialogf)}

const dashboard = document.querySelector('#dashboard');

const testTask = document.createElement('div');
testTask.classList.add('testTask');
const text = document.createElement('p');
text.textContent = "Test Task";
testTask.appendChild(text);
dialogform()
testTask.addEventListener('click', ()=>{
    document.querySelector('#title').value = text.textContent
document.querySelector('#formt').show()
document.querySelector('#submit').addEventListener('click',()=>{
    text.textContent = document.querySelector('#title').value 
})
})
dashboard.appendChild(testTask)

const createTast = ()=>{
    const testTask = document.createElement('div');
testTask.classList.add('testTask');
const text = document.createElement('p');
text.textContent = startin.value;
testTask.appendChild(text);
dialogform()
testTask.addEventListener('click', ()=>{
    document.querySelector('#title').value = text.textContent
document.querySelector('#formt').show()
document.querySelector('#submit').addEventListener('click',()=>{
    text.textContent = document.querySelector('#title').value 
})
})
dashboard.appendChild(testTask)
}


const startin = document.createElement('input');
startin.setAttribute('type','text');
startin.addEventListener('keypress',(e)=>{
    if (e.key === "Enter"){
        e.preventDefault();
        createTast()
    }
})
document.querySelector('footer').appendChild(startin)