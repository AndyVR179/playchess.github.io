function drawGraph(){

let canvas=document.getElementById("graphCanvas")
let ctx=canvas.getContext("2d")

ctx.clearRect(0,0,400,300)

ctx.beginPath()

for(let x=0;x<400;x++){

let y=150-(x/10)

ctx.lineTo(x,y)

}

ctx.stroke()

}
