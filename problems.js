function generateProblem(type){

if(type==="addition"){

let a=Math.floor(Math.random()*20)
let b=Math.floor(Math.random()*20)

return {
question:a+" + "+b,
answer:a+b
}

}

if(type==="multiply"){

let a=Math.floor(Math.random()*12)
let b=Math.floor(Math.random()*12)

return {
question:a+" × "+b,
answer:a*b
}

}

if(type==="linear"){

let x=Math.floor(Math.random()*10)

return {
question:"x + 3 = "+(x+3),
answer:x
}

}

}
