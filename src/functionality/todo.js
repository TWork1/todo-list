import './tod.css'
export const dialogbox = (taskCard) =>{
     taskCard = document.createElement('div');
     taskCard.textContent = addinput.value;
     taskCard.setAttribute('id', 'thecard');

        const dialog = document.createElement('dialog');
        dialog.setAttribute('id','task');
            const fieldset = document.createElement('fieldset');
            fieldset.setAttribute('id','formname');
                const taskform = document.createElement('form');
                taskform.setAttribute('method','dialog');
                taskform.setAttribute('id','form');
                    const legend = document.createElement('legend');
                    legend.textContent = addinput.value;
                taskform.appendChild(legend);
                    const fieldsetradio = document.createElement('fieldset');
                    fieldsetradio.setAttribute('id','checkboxes');
                       fieldsetradio.innerHTML = 
                       `<legend>Priority:</legend>

                       <div>
                         <input type="radio" id="none" name="priority" value="none" checked />
                         <label for="none">none</label>
                       </div>

                       <div>
                         <input type="radio" id="low" name="priority" value="low" />
                         <label for="low">!</label>
                       </div>
                     
                       <div>
                         <input type="radio" id="medium" name="priority" value="medium" />
                         <label for="medium">!!</label>
                       </div>
                     
                       <div>
                         <input type="radio" id="high" name="priority" value="high" />
                         <label for="high">!!!</label>
                       </div>
                     </fieldset>`
                taskform.appendChild(fieldsetradio);
                    const descriptionlabel = document.createElement('label');
                    descriptionlabel.setAttribute('for','description');
                    descriptionlabel.textContent = 'Notes';
                taskform.appendChild(descriptionlabel);
                    const descriptiontext = document.createElement('textarea');
                    descriptiontext.setAttribute('name','description');
                    descriptiontext.setAttribute('id','description');
                taskform.appendChild(descriptiontext);
                    const submit = document.createElement('Button');
                    submit.setAttribute('class','close');
                    submit.textContent = 'X';
                    submit.addEventListener('click',(e)=>{
                        dialog.close()
                    })
                taskform.appendChild(submit);
                    const deleted =  document.createElement('Button');
                    deleted.textContent ='Delete';
                    deleted.addEventListener('click',()=>{
                        deleted.parentNode.parentNode.parentNode.parentNode.remove()
                    })
                taskform.appendChild(deleted);
            fieldset.appendChild(taskform);
        dialog.appendChild(fieldset);
    taskCard.appendChild(dialog);
    taskCard.addEventListener('click',()=>{
        dialog.show()
    })
document.querySelector('#dashboard').appendChild(taskCard);
}
const addinput = document.createElement('input');
document.querySelector('header').appendChild(addinput);
addinput.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        e.defaultPrevented;
        dialogbox(addinput.value)
        addinput.value =''
    }
})