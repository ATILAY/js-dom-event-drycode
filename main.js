let simon = document.getElementById("simon");
let bruce = document.getElementById("bruce");
let ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink(){
    let allImages = document.querySelectorAll("img");
    for(let i = 0; i<allImages.length; i++){

        allImages[i].className = "hide";
    }//for
    let picId = this.attributes["data-img"].value;
    let pic =  document.getElementById(picId);
    if(pic.className === "hide"){
        pic.className = "";
    }else{
        pic.className = "hide";
    }//else
}//picL