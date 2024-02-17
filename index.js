const Name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener("submit", (e)=>{

    let message = []

    if (Name.value === "" || Name.value === null){
        message.push("Name can't be too short")
    }

    if (password.value.length < 8){
        message.push("password needs to be at least 8 characters")
    }

    if (message.length > 0){
        e.preventDefault()
        error.innerText = message.join(",")
    }

})