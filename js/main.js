let element = document.querySelector(".show-burger");
let completedTasks = document.getElementById("completedTasks");
let openTasks = document.getElementById("openTasks");
let notifications = document.getElementById("notifications");
let arrPhoto = document.querySelectorAll(".wrapper-post__item__photos .wrapper-post__item__photos_img");
let arrayElement = [];


// burger-menu
document.querySelector('.burger').addEventListener('click', () => {  burger();
});

function burger() {
    (element.classList.contains("show-block")) ? element.classList.remove("show-block") :
        element.classList.add("show-block");
};

// function for closed task
document.querySelector('.wrap__left-menu__tasks_completed-tasks')
    .addEventListener('click', () => {
        tasks();
    });

function tasks() {
    confirm("Are you sure you want to change the number of tasks?") ?(openTasks.innerHTML > 0 ? 
    (completedTasks.innerHTML++ , openTasks.innerHTML--) :alert("Sorry! You don't have open tasks.")) : null;
};

// count notifications
for (i = 0; i < arrPhoto.length; i++) {
    arrayElement.push(arrPhoto[i]);
    arrPhoto[i].addEventListener('click', function (e) {
        notifications.innerHTML = arrayElement.indexOf(e.target);
    });
}

