let first = document.getElementsByClassName("first")[0];
let last = document.getElementsByClassName("last")[0];
let buttons = Array.from(document.getElementsByClassName("rating")[0].children);
let submit = document.getElementsByClassName("submit")[0];
let choice = document.getElementsByClassName("choice")[0].children[0];
last.remove();
submit.onclick = function() {
    if (choice.textContent != "") {
        first.remove();
        document.body.insertBefore(last, document.body.firstChild);
    }
};
buttons.forEach(element => {
    element.addEventListener("click", () => {
        buttons.forEach(el => {
            el.classList.remove("active");
        });
        element.classList.add("active");
        choice.textContent = element.textContent;
    });
});