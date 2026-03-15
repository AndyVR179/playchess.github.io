let role=""
let currentSkill=""
let problemData=null

let progress={
addition:0,
multiply:0,
linear:0
}

function login(){

role=document.getElementById("role").value

document.getElementById("login").style.display="none"
document.getElementById("app").style.display="block"

document.getElementById("roleTitle").innerText=role

loadProgress()

}

function logout(){
location.reload()
}

function show(section){

["skills","practice","graph","progress"].forEach(s=>{
document.getElementById(s).classList.add("hidden")
})

document.getElementById(section).classList.remove("hidden")

}

function startSkill(skill){

currentSkill=skill

show("practice")

problemData=generateProblem(skill)

document.getElementById("problem").innerText=problemData.question

}

function submitAnswer(){

let ans=document.getElementById("answer").value

if(ans==problemData.answer){

document.getElementById("feedback").innerText="Correct"

progress[currentSkill]+=10

saveProgress()

}else{

document.getElementById("feedback").innerText="Incorrect"

}

problemData=generateProblem(currentSkill)

document.getElementById("problem").innerText=problemData.question

}

function saveProgress(){

localStorage.setItem("mathforge",JSON.stringify(progress))

loadProgress()

}

function loadProgress(){

let saved=localStorage.getItem("mathforge")

if(saved){
progress=JSON.parse(saved)
}

document.getElementById("stats").innerText=
"Addition: "+progress.addition+
" Multiply: "+progress.multiply+
" Linear: "+progress.linear

}
