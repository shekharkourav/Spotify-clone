// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("key was up");
// })
// inp.addEventListener("input",function(event){
// event.preventDefault;
// console.log(inp.value);
// })

// let body=document.querySelector('body');
// let btn=document.createElement('button');
// btn.innerText="click me";
// body.append(btn);

// btn.addEventListener("keypress",function(){
//     btn.style.backgroundColor="green";
// })

// let h2=document.querySelector("h2");
// let inp=document.querySelector("input");

// inp.addEventListener("input",function(){
//     if(inp.value!="slash"){
//         h2.innerText=inp.value;
//     }
// })

let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";

    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})