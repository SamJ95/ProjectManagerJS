//stable parent elements 

let projectUL = document.getElementById("task-list")
let projectMain = document.getElementById("main-task")
let taskList = document.querySelector('.list-group.list-group-flush')
let newForm = document.getElementById('addForm')












    







//CREATE a new project 
newForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log(evt)
    let projectName = evt.target.name.value
    let projectDescription = evt.target.description.value

    let theProjectObj =
    {name: projectName,
    description: projectDescription,
    }

    evt.target.reset()

    fetch("http://localhost:3000/api/v1/projects", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json" },
        body: JSON.stringify(theProjectObj)
    })
    .then(r => r.json())
    .then(turnJSONintoHTML)
})

//GET all the projects
fetch("http://localhost:3000/api/v1/projects")
.then(r => r.json())
.then((allProjects) => {
    allProjects.forEach(turnJSONintoHTML)
    
})

function turnJSONintoHTML(projectObj){
let newLi = document.createElement('li')
newLi.innerHTML = `<li class="list-group-item">${projectObj.name}<button class="btn btn-danger btn-sm float-right delete project">X</button></li>`
newLi.dataset.id = projectObj.id
newLi.setAttribute("id", "taskLi")
projectUL.append(newLi)

//DELETE a project 
let deleteBtn = newLi.querySelector('.btn.btn-danger.btn-sm.float-right.delete.project')

deleteBtn.addEventListener('click', () => {
    deleteProj(projectObj.id)

    // console.log(newLi, projectObj.name)

})

function deleteProj(id){
    //assign a value to the li to delete within the scope of the deleteProj function
    //in order to make sure that the li deleted is the li that is selected by the user (prevents any scoping issues)
    
    let deletedTaskLi = document.querySelector(`#taskLi[data-id="${id}"]`)
    // console.log(deletedTaskLi)
    // console.log(id)

    fetch(`http://localhost:3000/api/v1/projects/${id}`, {
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        deletedTaskLi.remove()
    })
}


//GET one project

newLi.addEventListener('click', () => {
    renderOneProject(projectObj)
    taskList.innerHTML = ""
})
}


function renderOneProject(projectObj){
fetch(`http://localhost:3000/api/v1/projects/${projectObj.id}`)
.then(r => r.json())
.then((oneProject) => {
    // console.log(oneProject)
    // oneProject => serialized project
    let projectName = document.getElementById("task-name")
    let projectDescription = document.getElementById("task-description")

    projectName.innerText = projectObj.name
    projectDescription.innerText = projectObj.description
   

    renderTasks(oneProject)
    
})
}
//Render all the tasks from the database for a given project model by iterating over serialized data
function renderTasks(projectObj) {
    console.log(projectObj)
    // debugger
projectObj.included.forEach((taskObj) => {
    takeOneTaskToLi(taskObj.attributes)
})
}

function takeOneTaskToLi(taskObj){
    console.log(taskObj)
    taskLi = document.createElement('li')
    taskLi.className = 'list-group-item'
    taskLi.innerText = taskObj.content
    console.log(taskList)
    taskList.append(taskLi)

}



//Process for building out any functionality

//1. User story
//2. Step to programmatically address that user story
//3. Repeat steps 1 and 2 until deliverable is met

//Special functionality notes: using fetch():
//-Where to put the functionality
//-General syntax and taking into consideration the changes in
//1.Memory
//2.Backend
//3. DOM



