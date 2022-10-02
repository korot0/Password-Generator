# Password-Generator
This app creates generates strong passwords.

Req.

<!-- - Generate two random passwords when the user clicks the button -->
<!-- - Each password should be 15 characters long -->

Stretch goals
<!-- - Ability to set password length (min 8, max 100) -->
<!-- - Add "copy on click" feature -->
- Toggle "symbols" and "numbers" on/off

//Generate passwords button
function generatePasswords() {
    for (let i = 0; i < 15; i++) {
        // (let i = 1; i <= 15; i++) <<same thing | for loops count the amount of times you want the code to run
        // (let i = 1; i < 16; i++) <<same thing
        let firstPass = Math.floor( Math.random() * characters.length );
        let secondPass = Math.floor( Math.random() * characters.length );
        //Math.floor cuts the decimals created by Math.random. Math Random gives a number between 0 to 0.999, when you multiply it by let's say 5 it creates numbers from 0.000 to 4.999. In this case we are multiplying it by the length of the characters array. The Pass variables are multiplying a random number out of the characters array. Returning a random character each time until it completes 15 laps of running the code expressed by the for loop.
        passOne.textContent += characters[firstPass];
        passTwo.textContent += characters[secondPass];
        //All we are doing here is giving passOne and Two the returned random values from the variables above and then adding the rest of the random characters until it completes 15 laps of code as declared in the for loop.
    }
}

// document.getElementById("length-input-el").defaultValue = "15"; <-- Sets the default value of input field.

<!-- oninput="this.nextElementSibling.value = this.value"
<output>15</output> --> Displays the value of slider

<!-- <input type="number" id="length-input-el" placeholder="Password Length" value="15" min="8" max="100"> -->