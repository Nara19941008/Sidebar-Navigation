// let showSidebar = document.querySelector(".show-sidebar");
// let hideSidebar = document.querySelector(".close-sidebar");

// let sidebar=document.querySelector(".sidebar");

// let icons=document.querySelectorAll(".sidebar .icon i")

// showSidebar.addEventListener("click",function(){

//     if(sidebar.classList.contains("hide")){
//         sidebar.classList.remove("hide")
//     }

//     for (const item of icons) {
//         item.classList.remove("d-none")
//     }

//     this.classList.add("d-none")

// })

// hideSidebar.addEventListener("click",function(){
//     hideSide(this)
// })



// let hideSide=(elem)=>{
//     if(!sidebar.classList.contains("hide")){
//         sidebar.classList.add("hide")
//     }

//     for (const item of icons) {
//         item.classList.remove("d-none")
//     }

//     elem.classList.add("d-none")
// }

// let section=document.getElementById("news");
// let ul=section.children[2];
// let li=ul.children;

// document.querySelector(".change").addEventListener("click",function(){

//     let list=this.parentNode.children[2].children

//     for (const li of list) {
//         if (li.innerText==="Siyezen") {
//             li.style.backgroundColor="green"
//         }else if(li.innerText=== "Baki"){
//             li.style.backgroundColor="red"
//         }else{
//             li.style.backgroundColor="blue"
//         }
//     }
// })


// let input=document.querySelector(".text-input");

// input.addEventListener("keyup",function(){
//     if(this.value==""){
//         if(document.querySelector(".validate-input").classList.contains(".d-none")){
//             document.querySelector(".validate-input").classList.remove(".d-none")
//             return;
//         }else{
//             document.querySelector(".validate-input").classList.add("d-none");
//             return;
//         }
//     }else{
//         document.querySelector(".validate-input").classList.add("d-none")
//     }
// })


// input.addEventListener("keyup", function (e) {
//     // console.log(e.target.value);
//     if (e.keyCode == 13) {

//         for (let i = 0; i < e.target.value; i++) {
//             let li = document.createElement("li");
//             li.className = "list-group-item";
//             li.innerText = i;

//             e.target.nextElementSibling.append(li);
//         }
//         e.target.value=""; 
//     }
// })