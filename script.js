
let taskCount = 0;
let taskArray = []
    
let name = document.getElementById('task-name')
let description = document.getElementById('task-describe')
let date = document.getElementById('task-date')
let urgent = document.getElementById('task-urgency')
let category = document.getElementById('task-category')

taskArray.push(name);
taskArray.push(description);
taskArray.push(date);
taskArray.push(urgent);
taskArray.push(category);


function addTask() {
    taskCount += 1;
    let table = document.getElementById('task-table');
    let newRow = document.createElement('tr');
    newRow.classList.add('tasks');
    let orderTd = document.createElement('td');
    orderTd.textContent = taskCount;
    newRow.appendChild(orderTd);

    for (let x = 0; x < taskArray.length; x++) {
        
        tempItem = document.createElement('td');
        if (taskArray[x] == urgent) {
            if (taskArray[x].checked == true) {
                tempItem.textContent = taskArray[x].value;
            } else {
                tempItem.textContent = "Not urgent";
            }
        } else {
            tempItem.textContent = taskArray[x].value;
        }
        newRow.appendChild(tempItem);
    }
    
    table.appendChild(newRow);
};

function deleteAll() {
    let taskRows = document.querySelectorAll('.tasks');
    taskRows.forEach((row)=>{
        row.remove();
    })
};

function showHide() {
    let taskRows = document.querySelectorAll('.tasks');
    taskRows.forEach((row)=>{
        row.classList.toggle('hide');
    })
}