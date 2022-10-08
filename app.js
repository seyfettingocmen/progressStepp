const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currenActive = 1;

next.addEventListener("click", () =>{
    currenActive++;

    if(currenActive > circle.length){
        currenActive = circle.length;
    }

    update();
});

prev.addEventListener("click", () =>{
    currenActive--;
    
    if(currenActive < 1){
        currenActive = 1;
    }

    update();
});


function update(){
    circle.forEach((circle, index) => {
        if(index < currenActive){
            circle.classList.add("active");
        } else{
            circle.classList.remove("active");
        }
    })

    const active = document.querySelectorAll(".active");

    
    progress.style.width = (active.length - 1) / (circle.length - 1)*100 + "%";

    if(currenActive === 1){
        prev.disabled = true;

    }else if(currenActive === circle.length){
        next.disabled = true;
        
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}

