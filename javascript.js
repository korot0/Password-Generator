const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const genPassBtn = document.getElementById('gen-pass-btn');
const passOne = document.getElementById('pass-one');
const passTwo = document.getElementById('pass-two');

//Slider password length
let sliderEl = document.getElementById('length-input-el')
let sliderOutputEl = document.getElementById('slider-output-el');
sliderOutputEl.innerHTML = sliderEl.value;
sliderEl.oninput = function() {
    sliderOutputEl.innerHTML = this.value;
}

//Generate password
function generatePasswords() {
    let passLength = document.getElementById('length-input-el').value;
    for (let i = 0; i < passLength; i++) {
        let firstPass = Math.floor( Math.random() * characters.length );
        let secondPass = Math.floor( Math.random() * characters.length );
        passOne.textContent += characters[firstPass];
        passTwo.textContent += characters[secondPass];
    }
}

//Password output fields
function passwords () {
    passOne.textContent = '';
    passTwo.textContent = '';
    generatePasswords();
}

//Copy on click
function copyOnClick(field) {
    if (field === 'one') {
        navigator.clipboard.writeText(document.getElementById('pass-one').innerText).then(function() {
            alert('Password copied!')
        })
    } else {
        navigator.clipboard.writeText(document.getElementById('pass-two').innerText).then(function() {
            alert('Password copied!')
        })
    }

}
