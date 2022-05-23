// select all necessery element and store in variable
const colorItemElements = document.querySelectorAll(".color-item");
const rgb_code = document.getElementById("rgb_code");
const hex_code = document.getElementById("hex_code");
const rgb_icon = document.getElementById("rgb_icon");
const hex_icon = document.getElementById("hex_icon");

// addEvent Lister on color-item element
colorItemElements.forEach((colorItem, key )=>{
    colorItem.addEventListener("click", ()=>{
      
        // replace inner text of the child element and play a beep sound
        colorItem.children[0].innerHTML = "Copied!";
        const audio = new Audio("../audio/beep-08b.mp3");
        audio.play();

        // get background color of HTML Element
        const rgbColorCode = window.getComputedStyle(colorItem).backgroundColor;

        // call rgbTohex coverter function
        const hexColorCode = rgb2hex(rgbColorCode);
        //show HEX color code in UI
        hex_code.innerText = hexColorCode;
        
        //call the copyToClipboard function
        copyToClipboard(hexColorCode);

         //show RGB color code in UI
        rgb_code.innerText = rgbColorCode;
        //set default text to the child element
        colorItem.addEventListener("mouseleave", ()=>{
            colorItem.children[0].innerHTML = "Click to Copy"
        })
    })
})

// copy color code to clipboard
function copyToClipboard(colorCode){
    navigator.clipboard.writeText(colorCode);
}


// convert RGB color to Hex color code 
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    console.log(rgb);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}