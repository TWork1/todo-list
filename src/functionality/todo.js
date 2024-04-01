
export const dialogbox = (taskCard) =>{
     taskCard = document.createElement('div');
     taskCard.setAttribute('priority',``);
     taskCard.textContent = addinput.value;

        const dialog = document.createElement('dialog');
        dialog.setAttribute('id','task');
            const fieldset = document.createElement('fieldset');
                const taskform = document.createElement('form');
                taskform.setAttribute('method','dialog');
                taskform.setAttribute('id','form');
                    const legend = document.createElement('legend');
                    legend.textContent = 'Task Creation';
                taskform.appendChild(legend);
                    const priorityLabel = document.createElement('label');
                    priorityLabel.setAttribute('for','priority');
                    priorityLabel.textContent = 'Priority';
                taskform.appendChild(priorityLabel);
                    const priorityinput = document.createElement('select');
                    priorityinput.setAttribute('id','priority');
                    priorityinput.setAttribute('name','priority');
                        const low = document.createElement('option');
                        low.setAttribute('value','low');
                        low.textContent = 'Low';
                    priorityinput.appendChild(low);
                        const mid = document.createElement('option');
                        mid.textContent = 'Medium'
                    priorityinput.appendChild(mid);
                        const high = document.createElement('option');
                        high.textContent = 'High';
                    priorityinput.appendChild(high);
                taskform.appendChild(priorityinput);
                    const descriptionlabel = document.createElement('label');
                    descriptionlabel.setAttribute('for','description');
                    descriptionlabel.textContent = 'Description';
                taskform.appendChild(descriptionlabel);
                    const descriptiontext = document.createElement('textarea');
                    descriptiontext.setAttribute('name','description');
                    descriptiontext.setAttribute('id','description');
                taskform.appendChild(descriptiontext);
                    const submit = document.createElement('input');
                    submit.setAttribute('type','submit')
                taskform.appendChild(submit);
            fieldset.appendChild(taskform);
        dialog.appendChild(fieldset);
    taskCard.appendChild(dialog);
    taskCard.addEventListener('click',()=>{
        priorityinput.parentNode.parentNode.parentNode.parentNode.setAttribute('priority',`${priorityinput.value}`)
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