    
    var rgbColor = document.querySelector("#rgb-color");
    var balls = document.querySelectorAll(".ball");
  
    function generateColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    const rightColor = "(" + r + "," + g + "," + b + ")";
      
    return rightColor;

    }




 //   function mainColor(){
    for(let i=0 ; i<balls.length ; i++){
        balls[i].style.backgroundColor = "rgb" + generateColor();     
        
 //   }

    }

    var corEscolhida = balls[Math.floor(Math.random()*balls.length)];
    console.log(corEscolhida);
    rgbColor.innerHTML = corEscolhida.style.backgroundColor;