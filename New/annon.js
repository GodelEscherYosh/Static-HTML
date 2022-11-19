const form = document.querySelector("form");
const submit = document.getElementById("submit");
let arr = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(e);
    for(let i = 1; i < 11; i++){
        if(i == 5){
            continue;
        }
        if(form.elements[i].checked){
            arr.push(form.elements[i].id);
        }
    }
    // console.log(e.target[1].checked);
    if(form.elements[12].value){
        arr.push(form.elements[12].value);
    };
})