const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function validateInput(){
   
    if(username.value.trim()===""){
        onError(username,"Username cannot be empty")
    }else{
        onSuccess(username)
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    if(password.value.trim()===""){
        onError(password,"password cannot be empty");
     }else{
         onSuccess(password);
     }
     if(password2.value.trim()===""){
        onError(password2,"password cannot be empty");
     }else{
         if(password.value.trim()!==password2.value.trim()){
            onError(password2,"Password & Confirm password not matching");
         }
         else
         onSuccess(password2);
     }
}

document.querySelector("button")
.addEventListener("click", ()=>{
    event.preventDefault();
validateInput();

});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    messageEle.innerText="";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }