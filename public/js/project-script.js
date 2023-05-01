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

    const distance = endDate - startDate;

    let duration = Math.floor(distance / (12 * 30 * 7 * 24 * 60 * 60 * 1000));
    if (duration > 0) duration = `${duration} years`;
    else {
        duration = Math.floor(distance / (30 * 24 * 60 * 60 * 1000));
        if (duration > 0) duration = `${duration} months`;
        else {
            duration = Math.floor(distance / (7 * 24 * 60 * 60 * 1000));
            if (duration > 0) duration = `${duration} weeks`;
            else {
                duration = Math.floor(distance / (24 * 60 * 60 * 1000));
                if (duration > 0) duration = `${duration} days`;
                else {
                    duration = Math.floor(distance / (60 * 60 * 1000));
                    if (duration > 0) duration = `${duration} hours`;
                    else {
                        duration = Math.floor(distance / (60 * 1000));
                        if (duration > 0) duration = `${duration} minutes`;
                        else {
                            duration = Math.floor (distance / 1000);
                            if (duration > 0) duration = `${duration} seconds`;
                        }
                    }
                }
            }
        }
    }

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
        duration,
        author: "Bintang",
        postedAt: new Date(),
    };

    myProject.push(myProjectData);
    console.log(myProject);
    clear();
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
                <p>Durasi: ${myProject[index].duration}</p>
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


function clear() {
    document.getElementById("project-name").value = "";
    document.getElementById("start-date").value = "";
    document.getElementById("end-date").value = "";
    document.getElementById("description").value = "";
    document.getElementById("upload-image").value = "";
}
