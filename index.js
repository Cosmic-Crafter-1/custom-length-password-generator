const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generatePasswordsButton = document.getElementById("generate-btn");
generatePasswordsButton.addEventListener("click", generatePasswords);

let displayOne = document.querySelector(".display-1");
let displayTwo = document.querySelector(".display-2");

let passwordOne = "";
let passwordTwo = "";
let bothPasswords = "";

let copyButton = document.getElementById("copy-btn");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(bothPasswords);
    alert("Text copied successfully!");
  } catch (err) {
    console.error("Failed to copy text:", err);
    alert("Oops, something went wrong while copying!");
  }
});

function generateRandomNumber() {
  // Should be 15 chars long.
  let randomNumber = Math.floor(Math.random() * characters.length);
  return randomNumber;
}

function displayPasswords() {
  displayOne.textContent = passwordOne;
  displayTwo.textContent = passwordTwo;
}

function clearDisplay() {
  // Password should be reset with each click, not the textContent.
  passwordOne = "";
  passwordTwo = "";
}

function getPasswordLength() {
  let passwordLength = document.getElementById("password-length").value;

  if (passwordLength == "") {
    passwordLength = 12;
  } else if (passwordLength < 8) {
    alert("Too short (min 8), reverting to default !!");
    passwordLength = 8;
  } else if (passwordLength > 18) {
    alert("Too big (max 18) , reverting to default !!");
    passwordLength = 18;
  } else {
    passwordLength = passwordLength;
  }

  console.log(passwordLength);
  return passwordLength;
}

function generatePasswords() {
  clearDisplay();

  let randomIndexOne = generateRandomNumber();
  let randomIndexTwo = generateRandomNumber();
  let passwordLength = getPasswordLength();

  for (let i = 0; i < passwordLength; i++) {
    randomIndexOne = generateRandomNumber();
    randomIndexTwo = generateRandomNumber();

    passwordOne += characters[randomIndexOne];
    passwordTwo += characters[randomIndexTwo];
  }

  displayPasswords();

  bothPasswords =
    "First Password: " +
    passwordOne +
    "\n" +
    " || Second Password: " +
    passwordTwo;
  console.log(bothPasswords);
}
