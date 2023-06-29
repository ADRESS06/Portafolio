//agradecimientos
creator = "Yoimar Andres julio Salcedo"
creatorC = "Yoimar"
console.log(`Esta pagina fue creada por ${creator}`);
//funcion del burger-menu
let menu = document.getElementById("menu");
let mopen = document.getElementById("mopen");
let mclose = document.getElementById("mclose");
let downloadpdf = document.getElementById("downloadpdf")
let animaC = document.getElementById("animaC")
let aniIni = document.getElementById("allContent")
let upload = document.getElementById("upload")
let loadbar = document.getElementById("divisorC")
let randon = Math.round(Math.random() * 16)
let time  = "crecimiento "+randon+"s"



//menu de amburguesa
mopen.addEventListener("click", imenu);
mclose.addEventListener("click", imenu);
downloadpdf.addEventListener("click",imprimir);

function imenu(){
    menu.classList.toggle("ver-menu");

    if(menu.classList.contains("ver-menu")){
        mopen.style.display = "none";
        mclose.style.display = "block";
    }
    else{
        mopen.style.display = "block";
        mclose.style.display = "none";
    }
}

//boton para imprimir pagina
function imprimir(){
    print()
}

//pantalla de carga
setTimeout(() => {
    animaC.style.display = "none";
    aniIni.style.display = "block";
  }, randon  * 1000);


loadbar.style.animation = time
