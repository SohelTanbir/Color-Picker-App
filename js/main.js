// select all necessery element and store in variable
const colorItemElements = document.querySelectorAll(".color-item");
const rgb_color = document.getElementById("rgb_color");
// addEvent Lister on color-item element
colorItemElements.forEach((colorItem, key )=>{
    colorItem.addEventListener("click", ()=>{
        // copy text to clipboard
        navigator.clipboard.writeText(colorItem.children[0].innerHTML);
    
        // replace inner text of the child element and play a beep sound
        colorItem.children[0].innerHTML = "Copied!";
        const audio = new Audio("../audio/beep-08b.mp3");
        audio.play()
        const rgbColorCode = window.getComputedStyle(colorItem).backgroundColor;
        const hexColorCode = window.getComputedStyle(colorItem)
        const hex = rgb2hex(rgbColorCode)
        console.log(hex);
        rgb_color.innerText = rgbColorCode
        //set default text to the child element
        colorItem.addEventListener("mouseleave", ()=>{
            colorItem.children[0].innerHTML = "Click to Copy"
        })
    })
})
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        console.log("x = "+ x);
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}