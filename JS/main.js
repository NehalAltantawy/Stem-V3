const counter1 =document.querySelector(".counter1"),
      counter2=document.querySelector(".counter2"),
      counter3=document.querySelector(".counter3"),
      counter4=document.querySelector(".counter4");


let count = 1;

setInterval( ()=>{
    if(count <= 500){
        count++;
        counter1.innerHTML = count;
        counter2.innerHTML = count;
    } 
}, 10)
setInterval( ()=>{
    if (count <= 10){
        count++;
        counter3.innerHTML = count
    }
} ,1000)
setInterval( ()=>{
    if (count <= 150){
        count++;
        counter4.innerHTML = count
    }
} ,100)


const arb = document.getElementById('arb'),
      home = document.getElementById("home"),
      about = document.getElementById("about"),
      courses =document.getElementById("courses"),
      team =document.getElementById("team"),
      Accomplishments =document.getElementById("Accomplishments"),
      gallary =document.getElementById("gallary"),
      contact=document.getElementById("contact"),
      footerHome =document.getElementById("footer-home")
function Arabic(){
    arb.style.direction = "rtl";
    home.innerHTML =" الرئيسية " ;
    about.innerHTML ="نبذة عنا";
    courses.innerHTML="كورسات";
    team.innerHTML="فريق العمل";
    Accomplishments.innerHTML="الانجازات";
    gallary.innerHTML="المعرض";
    contact.innerHTML="تواصل معنا";
    // footerHome.innerHTML="الرئيسية"
}

const eng = document .querySelector(".eng");
function English(){
    eng.style.direction = "ltr";
    home.innerHTML =" Home " ;
    about.innerHTML ="About-Us";
    courses.innerHTML="Courses";
    team.innerHTML=" Team";
    Accomplishments.innerHTML="Accomplishments";
    gallary.innerHTML="Gallary";
    contact.innerHTML=" Contact-Us"
}



