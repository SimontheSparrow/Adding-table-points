let num = 1;

function addPoints() {
    const point = document.createElement("li");
    document.body.appendChild(point);
    point.textContent = num;
    if (num % 4 == 0) {
        point.classList.add("big");
    }
    num++;

}

document.querySelector("button").addEventListener("click", addPoints)