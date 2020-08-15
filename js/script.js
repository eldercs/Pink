function myFunction() {
    document.getElementById("menu_itemid").classList.toggle("show");
    let menu = document.querySelector(".menu__navigator");
    menu.style.background = "#283645";
    let button = document.querySelector(".button__menu");
    button.style.display = "none";
    let button_cl = document.querySelector(".button__close");
    button_cl.style.display = "block";
}
function myFunction2(){
    document.getElementById("menu_itemid").classList.toggle("show");
    let menu = document.querySelector(".menu__navigator");
    menu.style.background = "rgba(0, 0, 0, 0.3)";
    let button = document.querySelector(".button__menu");
    button.style.display = "block";
    let button_cl = document.querySelector(".button__close");
    button_cl.style.display = "none";
}
function show_text(id){
    let text1 = document.getElementById("reviews__name-p1");
    let text2 = document.getElementById("reviews__name-p2");
    let text3 = document.getElementById("reviews__name-p3");
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    if(id == "reviews-1"){
    let text = document.getElementById("reviews__name-p1");
    text.style.display = "block";
    }
    else if(id == "reviews-2"){
    let text = document.getElementById("reviews__name-p2");
    text.style.display = "block";
    }
    else if (id == "reviews-3"){
    let text = document.getElementById("reviews__name-p3");
    text.style.display = "block";
    }
    else 
    alert("lol u die");
}
function table2(w){

   if(w == "list-1"){
        let width2 = document.querySelector(".list__table");
        width2.style.left = "-80%";
        let name = document.querySelector(".list__enable-name");
        name.style.left = "26%";
    }
    else if(w == "list-2"){
        let width2 = document.querySelector(".list__table");
        width2.style.left = "-168%";
        for(let i = 0; i< 4; i++){
        let name = document.querySelector(".list__enable-name");
        name.style.left = "51.5%";
        }
    }
    else if(w == "list-3"){
        let width2 = document.querySelector(".list__table");
        width2.style.left = "-255%";
        let name = document.querySelector(".list__enable-name");
        name.style.left = "76.5%";
    }
}