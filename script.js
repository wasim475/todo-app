let task = document.querySelector('.task');
let date = document.querySelector('.date');
let submit = document.querySelector('.submit');
let list = document.querySelector('.list');
let err = document.querySelector('.err');
let update = document.querySelector('.update');

let editText;
let taskList = []


function rearrange(){
    let del = document.querySelectorAll('.delete')
    let edit = document.querySelectorAll('.edit')
    let delArr = Array.from(del)
    let editArr = Array.from(edit)

    delArr.map((item)=>{
        item.addEventListener('click',function(){
            list.innerHTML = ''
            taskList.splice(item.dataset.index,1)
            taskList.map((item, index)=>{
                list.innerHTML += `<li> ${item.name}  ~~  ${item.date} <button data-index= ${index} class = 'delete'> delete </button> <button data-index= ${index} class = 'edit'> Edit </button> </li>`
            })
            rearrange()
        })
    })
    editArr.map((Eitem, index)=>{
        Eitem.addEventListener('click',function(){
            editText = index;
            update.style.display = 'inline-block'
            submit.style.display = 'none'
            task.value = taskList[editText].name  
            date.value = taskList[editText].date
        })
    })
}


submit.addEventListener('click',function(){
    if(!(task.value) || !(date.value)){
        err.style.display = 'block'
        err.style.color = 'red'
        err.innerHTML = 'Please write something and select a date.'
    }else{
        err.style.display = 'none'
        list.innerHTML = ''
        taskList.push({
            name: task.value,
            date: date.value
        })
        taskList.map((item, index)=>{
            list.innerHTML += `<li> ${item.name}  ~~  ${item.date} <button data-index= ${index} class = 'delete'> delete </button> <button data-index= ${index} class = 'edit'> Edit </button> </li>`
            task.value = ''
            date.value = ''
        })
    }

    
    rearrange()
})
update.addEventListener('click',function(){
    update.style.display = 'none'
    submit.style.display = 'inline-block'
    
    list.innerHTML = ''
    taskList[editText].name = task.value;
    taskList[editText].date= date.value;
    taskList.map((item, index)=>{
        list.innerHTML += `<li> ${item.name}  ~~  ${item.date} <button data-index= ${index} class = 'delete'> delete </button> <button data-index= ${index} class = 'edit'> Edit </button> </li>`
        
    })
    rearrange()
    
})

// complete