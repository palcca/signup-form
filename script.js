
function comparePassword(){
    let passwordOne = document.querySelector(".passwordOne");
    let passwordTwo = document.querySelector(".passwordTwo");
    let passwordContainer =document.querySelector(".passwordContainer");
    if (passwordOne.value != passwordTwo.value){
        passwordOne.classList.add("noMatch");
        passwordTwo.classList.add("noMatch");

        alert("Passwords do not match")
        
    
        return false;
    } else {

        return true;
    }
}

comparePassword();
