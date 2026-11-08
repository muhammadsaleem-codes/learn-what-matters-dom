// cursor move with mouse logic;
let mainn = document.querySelector("#mainn")
let cursur = document.querySelector(".cursur")
mainn.addEventListener("mousemove", function(dats){
    cursur.style.left= dats.x+ "px"    
    cursur.style.top= dats.y+ "px"    
})
