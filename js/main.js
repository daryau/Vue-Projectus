let element = document.querySelector(".show-burger");
let completedTasks = document.getElementById("completedTasks");
let openTasks = document.getElementById("openTasks");
let notifications = document.getElementById("notifications");
let arrPhoto = document.querySelectorAll(".wrapper-post__item__photos .wrapper-post__item__photos_img");
let arrayElement = [];

burger();
tasks();
countNotifications();

// burger-menu
function burger() {
    document.querySelector('.burger').addEventListener('click', () => {
        element.classList.contains("show-block") ? element.classList.remove("show-block") :
            element.classList.add("show-block");
    });
};

// function for closed task
function tasks() {
    document.querySelector('.wrap__left-menu__tasks_completed-tasks')
        .addEventListener('click', () => {
            confirm("Are you sure you want to change the number of tasks?") ? openTasks.textContent > 0 ?
                (completedTasks.textContent++ , openTasks.textContent--) : alert("Sorry! You don't have open tasks.") : null;
        });
};

// count notifications
function countNotifications() {
    for (i = 0; i < arrPhoto.length; i++) {
        arrayElement.push(arrPhoto[i]);
        arrPhoto[i].addEventListener('click', (e) => {
            notifications.innerHTML = arrayElement.indexOf(e.target);
        });
    }

}