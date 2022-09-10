const box = document.getElementById("script-placeholder");
const icons = document.getElementById("icon-placeholder");

let iconArray = ["House","Phone","Heart","Car","Camera","Plane","Key","Campfire","Anchor","UFO","Globe","Robot","Narwhal", "Ghost"];



function random(){
   return Math.floor(Math.random() * iconArray.length);
}

let firstIcon = iconArray[random()]
let randIcons = []

//box.appendChild(`<h4>Please Choose the "${firstIcon}" icon</h4>`) 



for(a=0; a < 5; a++){
    do{
        randIcons[a] = iconArray[random()];
    } while(randIcons[a]===firstIcon)
}

randIcons.push(firstIcon);
randIcons.sort();

box.insertAdjacentHTML("afterend",randIcons);
box.insertAdjacentHTML("afterend",`<h4>Please Choose the "${firstIcon}" icon</h4>`);
