let input = document.querySelector(".text-input");
input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        e.target.nextElementSibling.innerHTML = "";
        for (let i = 1; i <= e.target.value; i++) {
           
            let li = document.createElement("li");
            
            li.className = "list-group-item";
            
            li.innerText = i;

            e.target.nextElementSibling.append(li);

            let icon = document.createElement("i");

            icon.classList.add("fa-solid");

            icon.classList.add("fa-circle-xmark");
            icon.style.cursor = "pointer"
            icon.style.color = "pink";

            icon.style.float = "right";
            
            icon.onclick = function () {
                li.remove();
            }

            li.append(icon);

            
        }

        e.target.value = "";

    }
})