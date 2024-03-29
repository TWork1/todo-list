export const taskinfo =()=> {
    let title = `${document.querySelector('#title').value}`
    let priority = `${document.querySelector('#priority').value}`
    let description = `${document.querySelector('#description').value}`
    console.log(description)
}
export const dialogform =()=>{
    const dialogf = document.createElement('div');
    dialogf.innerHTML= `
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
            <button type="submit">submit</button>
        </form>
    </fieldset>`
document.querySelector('#form').appendChild(dialogf)
}
export const clearform =()=>{
    document.querySelector('#title').value = null
    document.querySelector('#priority').value = null
    document.querySelector('#description').value = null
}
