const empty = ""
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+{}"

const pLenght = document.getElementById("p-lenght")
const upperCase = document.getElementById("p-uppercase")
const lowerCase = document.getElementById("p-lowercase")
const pNumber = document.getElementById("p-number")
const pSymbol = document.getElementById("p-symbol")
const password = document.getElementById("password")
const submit = document.getElementById("submit")

submit.addEventListener("click", function(){
  let initialPassword = empty;
  (upperCase.checked) ? initialPassword += uCase : "";
  (lowerCase.checked) ? initialPassword += lCase : "";
  (pNumber.checked) ? initialPassword += number : "";
  (pSymbol.checked) ? initialPassword += symbol : "";

  password.value = generatePassword(pLenght.value, initialPassword)
})

function generatePassword(l, initialPassword) {
  let pass = ""
  for (let i=0; i<l; i++) {
    pass += initialPassword.charAt(Math.floor(Math.random()* initialPassword.length))
  }
  return pass
}

const copy = document.getElementById("copy")
copy.addEventListener("click", function() {
  if (password == "") {
    alert("Please generate a password")
  }else {
    password.select()
    document.execCommand("copy")
    alert("Password has been copied to clipboard")
  }
})
