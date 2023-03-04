let body= document.getElementById("gradient");
let color1 =document.querySelector(".color1");
let color2 =document.querySelector(".color2");
let h3 =document.querySelector("h3");


function setGradient() {
    body.style.background =
    "linear-gradient(to right ," 
    + color1.value 
    + "\t15%"
    + ","
    +color2.value
    + ")"
    + "no-repeat";
    h3.textContent = body.style.background + ";";
    copyText()
};
 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function copyText() {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("copy"));
    h3.append(button);
    button.onclick = function(){
        let copyGradientColor = h3.textContent.slice(0,-4);
        navigator.clipboard.writeText(copyGradientColor);
        alert(" Copied ")
        return
    };
    
};

