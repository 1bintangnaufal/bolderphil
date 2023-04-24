let myProject = [];

function getMyProject(event) {
    event.preventDefault();

    let projectName = document.getElementById("project-name").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let uploadImage = document.getElementById("upload-image").files;

    const techIconNodeJs = '<img src="assets/Images/nodejs.png">'
    const techIconReact = '<img src="assets/Images/reactjs.png">'
    const techIconJavascript = '<img src="assets/Images/javascript.png">'
    const techIconSocketIo = '<img src="assets/Images/socket-io.png">'
    
    let nodeJs = document.getElementById ("NodeJs").checked ? techIconNodeJs : "" ;
    let react = document.getElementById ("React").checked ? techIconReact : "" ;
    let Javascript = document.getElementById ("Javascript").checked ? techIconJavascript : "" ;
    let socketIo = document.getElementById ("SocketIo").checked ? techIconSocketIo : "" ;

    uploadImage = URL.createObjectURL(uploadImage[0]);

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    let myProjectData = {
        projectName, 
        startDate, 
        endDate, 
        description, 
        uploadImage, 
        nodeJs, 
        react, 
        Javascript, 
        socketIo,
        author: "Bintang",
        postedAt: new Date(),
    };

    myProject.push(myProjectData);
    console.log(myProject);
    displayAddedProject();
}


function displayAddedProject() {
    document.getElementById("projects-display").innerHTML = "";
    for (let index = 0; index < myProject.length; index++) {
        document.getElementById("projects-display").innerHTML +=
        `<div class="card-contents">
            <div class="card">
                <img src=${myProject[index].uploadImage} alt="User Photo">
                <a href="project-detail.html" id="card-1-click"><h3>${myProject[index].projectName}</h3></a>
                <p>Durasi: ${myProject[index].startDate} - ${myProject[index].endDate}</p>
                <p>${myProject[index].description}</p>
                <div class="icon-section">
                    ${myProject[index].nodeJs}
                    ${myProject[index].react}
                    ${myProject[index].Javascript}
                    ${myProject[index].socketIo}
                </div>
                <div class="button-3">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>`
    }
}
