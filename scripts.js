const box = document.getElementById("script-placeholder");
const icons = document.getElementById("icon-placeholder");

let iconArray = ["House","Phone","Heart","Car","Camera","Key","Anchor","Robot", "Ghost"];



function random(){
   return Math.floor(Math.random() * iconArray.length);
}

let firstIcon = iconArray[random()]
let randIcons = []

for(a=0; a < 5; a++){
    do{
        randIcons[a] = iconArray[random()];
    } while(randIcons[a]===firstIcon)
}

randIcons.push(firstIcon);
randIcons.sort();

box.innerHTML = `<h4>Please Choose the "${firstIcon}" icon --- 1 of 2</h4> `;

for(let b = 0; b < randIcons.length; b++){
    if(randIcons[b] === "House" ){
        icons.innerHTML += `<div onclick="myFunction('House')"><i class="fa-sharp fa-solid fa-house"></i><div>`;
    } else if(randIcons[b] === "Phone" ){
        icons.innerHTML += `<div onclick="myFunction('Phone')"><i class="fa-sharp fa-solid fa-phone"></i><div>`;
    } else if(randIcons[b] === "Heart"){
        icons.innerHTML += `<div onclick="myFunction('Heart')"><i class="fa-sharp fa-solid fa-heart"></i><div>`;
    } else if(randIcons[b] === "Car"){
        icons.innerHTML += `<div onclick="myFunction('Car')"><i class="fa-sharp fa-solid fa-car"></i><div>`;
    } else if(randIcons[b] === "Camera"){
        icons.innerHTML += `<div onclick="myFunction('Camera')"><i class="fa-sharp fa-solid fa-camera"></i><div>`;
    } else if(randIcons[b] === "Plane"){
        icons.innerHTML += `<div onclick="myFunction('Plane')"><i class="fa-sharp fa-solid fa-plane"></i><div>`;
    } else if(randIcons[b] === "Key"){
        icons.innerHTML += `<div onclick="myFunction('Key')"><i class="fa-sharp fa-solid fa-key"></i><div>`;
    } else if(randIcons[b] === "Anchor"){
        icons.innerHTML += `<div onclick="myFunction('Anchor')"><i class="fa-sharp fa-solid fa-anchor"></i><div>`;
    } else if(randIcons[b] === "Robot"){
        icons.innerHTML += `<div onclick="myFunction('Robot')"><i class="fa-sharp fa-solid fa-robot"></i><div>`;
    } else if(randIcons[b] === "Ghost"){
        icons.innerHTML += `<div onclick="myFunction('Ghost')"><i class="fa-sharp fa-solid fa-ghost"></i><div>`;
    } else{icons.innerHTML += `ERROR`;}
    icons.innerHTML += ` `;
}

let secondIcon = "";
function myFunction(paramPassed){
    if(paramPassed === firstIcon){
        icons.innerHTML = "";
        secondIcon = iconArray[random()]
        let randIcons2 = []
        for(c=0; c < 5; c++){
            do{
                randIcons2[c] = iconArray[random()];
            } while(randIcons2[c]===secondIcon)
        }

        randIcons2.push(secondIcon);
        randIcons2.sort();
        box.innerHTML = `<h4>Please Choose the "${secondIcon}" icon --- 2 of 2</h4> `;
        console.log(randIcons2)

        for(let d = 0; d < randIcons2.length; d++){
            if(randIcons2[d] === "House" ){
                icons.innerHTML += `<div onclick="myFunction2('House')"><i class="fa-sharp fa-solid fa-house"></i><div>`;
            } else if(randIcons2[d] === "Phone" ){
                icons.innerHTML += `<div onclick="myFunction2('Phone')"><i class="fa-sharp fa-solid fa-phone"></i><div>`;
            } else if(randIcons2[d] === "Heart"){
                icons.innerHTML += `<div onclick="myFunction2('Heart')"><i class="fa-sharp fa-solid fa-heart"></i><div>`;
            } else if(randIcons2[d] === "Car"){
                icons.innerHTML += `<div onclick="myFunction2('Car')"><i class="fa-sharp fa-solid fa-car"></i><div>`;
            } else if(randIcons2[d] === "Camera"){
                icons.innerHTML += `<div onclick="myFunction2('Camera')"><i class="fa-sharp fa-solid fa-camera"></i><div>`;
            } else if(randIcons2[d] === "Plane"){
                icons.innerHTML2 += `<div onclick="myFunction2('Plane')"><i class="fa-sharp fa-solid fa-plane"></i><div>`;
            } else if(randIcons2[d] === "Key"){
                icons.innerHTML += `<div onclick="myFunction2('Key')"><i class="fa-sharp fa-solid fa-key"></i><div>`;
            } else if(randIcons2[d] === "Anchor"){
                icons.innerHTML += `<div onclick="myFunction2('Anchor')"><i class="fa-sharp fa-solid fa-anchor"></i><div>`;
            } else if(randIcons2[d] === "Robot"){
                icons.innerHTML += `<div onclick="myFunction2('Robot')"><i class="fa-sharp fa-solid fa-robot"></i><div>`;
            } else if(randIcons2[d] === "Ghost"){
                icons.innerHTML += `<div onclick="myFunction2('Ghost')"><i class="fa-sharp fa-solid fa-ghost"></i><div>`;
            } else{icons.innerHTML += `ERROR`;}
            icons.innerHTML += ` `;
        }

    }else{
        box.innerHTML = "ERROR, CAPTCHA FAILED. Refresh Page to try again.";
        icons.innerHTML = " ";
    }


}

function myFunction2(paramPassed2){
     if(paramPassed2 === secondIcon){
        box.innerHTML = "<h5>Hey there, my email is: camjamesj"+"@"+"gmail.com</h5>";
        icons.innerHTML = " ";
     } else{box.innerHTML = "ERROR, CAPTCHA FAILED. Refresh Page to try again.";
     icons.innerHTML = " ";}
}