const Notify = new XNotify();

Notify.info({
    width: "500px",
    title: "Info",
    description: "Click me, or I will change color by myself on every ten seconds :)"
});

function changeColor() {
    let button = document.getElementById("button");
    if (button.classList.contains("btn-danger")) {
        button.classList.replace("btn-danger", "btn-warning");
    } else if (button.classList.contains("btn-warning")) {
        button.classList.replace("btn-warning", "btn-success");
    } else if (button.classList.contains("btn-success")) {
        button.classList.replace("btn-success", "btn-danger");
    }
}

function runChangeColor() {
    setInterval(changeColor, 10000);
}

