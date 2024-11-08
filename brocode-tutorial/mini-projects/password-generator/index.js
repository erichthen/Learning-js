
let generateButton = document.getElementById("generate-button");
let copyButton = document.getElementById("copy-button");
let password = document.getElementById("password");


generateButton.onclick = () => {

    let lengthInput = document.getElementById("length");
    let numbersInput = document.getElementById("numbers");
    let uppercaseInput = document.getElementById("uppercase");
    let specialsInput = document.getElementById("specials");

    const length = parseInt(lengthInput.value);
    if (length < 1 || isNaN(length)) {
        alert("Invalid length");
        return;
    }

    const includeNumbers = numbersInput.checked;
    const includeUppercase = uppercaseInput.checked;
    const includeSpecials = specialsInput.checked;

    password.innerText = `${generatePassword(length, includeNumbers, includeUppercase, includeSpecials)}`;
    password.style.display = "block";
    copyButton.style.display = "inline";

}

copyButton.onclick = () => {
    const passwordText = password.innerText;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy password: " + err);
    });
};

function generatePassword(length, includeNumbers, includeUppercase, includeSpecials) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "1234567890";
    const specialCharacters = "!@#$%^&*()+-_?";
    let password = "";
    let selection;

    if (!(includeNumbers || includeUppercase || includeSpecials)) {
        for (let i = 0; i < length; i++) {
            password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
        }
        return password;
    }

    if (includeNumbers && !(includeUppercase || includeSpecials)) {
        selection = lowercaseChars + digits;
        for (let i = 0; i < length; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }
        return password;
    }

    if (includeUppercase && !(includeNumbers || includeSpecials)) {
        selection = lowercaseChars + upperCaseChars;
        for (let i = 0; i < length; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }
        return password;
    }

    if (includeSpecials && !(includeNumbers || includeUppercase)) {
        selection = lowercaseChars + specialCharacters;
        for (let i = 0; i < length; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }
        return password;
    }

    if (includeNumbers && includeUppercase && !includeSpecials) {
        selection = lowercaseChars + digits + upperCaseChars;
        for (let i = 0; i < length; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }
        return password;
    }

    if (includeNumbers && includeSpecials && !includeUppercase) {
        selection = lowercaseChars + digits + specialCharacters;
        for (let i = 0; i < length; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }
        return password;
    }

    if (includeUppercase && includeSpecials && !includeNumbers) {
        selection = lowercaseChars + upperCaseChars + specialCharacters;
        for (let i = 0; i < length; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }
        return password;
    }

    if (includeNumbers && includeUppercase && includeSpecials) {
        selection = lowercaseChars + digits + upperCaseChars + specialCharacters;
        for (let i = 0; i < length; i++) {
            password += selection[Math.floor(Math.random() * selection.length)];
        }
        return password;
    }
}
