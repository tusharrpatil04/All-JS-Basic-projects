// let todo = ["sv", "fvhs", "fvb", "vev"];

// let req = prompt("Please enter your request");

// while(true){
//     if(req == 'quit'){
//         console.log("Quitting app");
//         break;
//     }

//     if(req == 'list'){
//         for(let i = 0; i < todo.length; i++){
//             console.log(i + " " + todo[i]);
//         }
//     }
// }


//Todo Activity -->

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value = "";
})


//Event Delegation -->
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});