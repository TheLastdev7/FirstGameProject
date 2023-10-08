
function myGame() {
    //variaveis
    let ps = 0;
   
    //puxar a variavel de cada nome em uma lista
    const nameps = [document.querySelector(".name1"), document.querySelector(".name2"), document.querySelector(".name3")];
    const statusList =  [document.querySelector(".stats-list-1"), document.querySelector(".stats-list-2"), document.querySelector(".stats-list-3")]
    //desestruração de arrays -- nome e lista de status
    const [francis, pedro, antonio] = nameps;
    const [status1, status2, status3] = statusList;

    const selectPs = document.querySelector(".select_ps");
    const mainContent = document.querySelector(".main-layout");

    const psImg = document.querySelector(".img_ps");
    const popup = document.querySelector(".popup")
    //botoes
    const enter = document.getElementById("enter-game");
    const backBtn = document.getElementById("close-btn");
    const btnPs1 = document.getElementById("btnPs1");
    const btnPs2 = document.getElementById("btnPs2");
    const btnPs3 = document.getElementById("btnPs3");
    
    if(popup.classList.contains("popup")){
        // popup.classList.add("disabled")
        mainContent.style.display = "none";
        selectPs.style.display = "none";     
    };
    enter.addEventListener("click", () => {
        popup.classList.add("disabled");
        selectPs.style.display = "flex";
        mainContent.style.display = "none";
    });
   
    btnPs1.addEventListener("click", () => {
        selectPs.classList.add("disabled");
        selectPs.style.display = "none";

        mainContent.style.display = "block";
        psImg.style.background = "url('./francis.jpeg')";
        psImg.style.backgroundSize = "cover";
        francis.style.display = "block";
        status1.style.display = "block";
       
        console.log(ps)
    });
    btnPs2.addEventListener("click", () => {
        selectPs.style.display = "none";
        mainContent.style.display = "block";

        psImg.style.background = "url('./pedro.png')";
        psImg.style.backgroundSize = "cover";
        pedro.style.display = "block";
        status2.style.display = "block";
       
        //updateGameDisplay()
    })
    btnPs3.addEventListener("click", () => {
        selectPs.style.display = "none";
        mainContent.style.display = "block";

        psImg.style.background = "url('./antonio.png')";
        psImg.style.backgroundSize = "cover";
        antonio.style.display = "block";
        status3.style.display = "block";
        
        //updateGameDisplay()
    });
    backBtn.addEventListener("click", () => {
        selectPs.style.display = "flex";
        mainContent.style.display = "none";
        
        francis.style.display = "none"
        antonio.style.display = "none";
        pedro.style.display = "none";
        status1.style.display = "none";
        status2.style.display = "none";
        status3.style.display = "none";
        
        ps = 0
        // updateGameDisplay()
    }) 
    
   

    //name on top line, when ps already selected
    // function updateGameDisplay() {
    //     switch (ps) {
    //         case 1:
    //             psImg.style.background = "url('./francis.jpeg')";
    //             psImg.style.backgroundSize = "cover";
    //             francis.style.display = "block";
    //             status1.style.display = "block";
    //             break;
    //         case 2:
    //             psImg.style.background = "url('./pedro.png')";
    //             psImg.style.backgroundSize = "cover";
    //             pedro.style.display = "block";
    //             status2.style.display = "block";
    //             break;
    //         case 3:
    //             psImg.style.background = "url('./antonio.png')";
    //             psImg.style.backgroundSize = "cover";
    //             antonio.style.display = "block";
    //             status3.style.display = "block";
    //             break;
    //         default:
    //             console.log("o")
    //             break;
    //     }
    // }
  
}

myGame();
