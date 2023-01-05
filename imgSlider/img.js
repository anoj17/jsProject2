let rightImg = document.querySelector(".right")
let leftImg = document.querySelector(".left")

let imgs = document.querySelectorAll("img");
let containerImg = document.querySelector(".image")

let countImg = 1;

rightImg.addEventListener("click",() => {
    countImg++;
    contdImg();
})

leftImg.addEventListener("click",() => {
    countImg--;
    contdImg();
})

function contdImg(){
    if(countImg > imgs.length){
        countImg = 1;
    }
    if(countImg < 1){
        countImg = imgs.length;
    }
    containerImg.style.transform = `translateX(-${(countImg-1)*500}px)`;
}