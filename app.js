function project() {
    document.getElementById("proj").style.display = "block";
    document.getElementById("skillset").style.display = "none";
    document.getElementById("educate").style.display = "none";
}

function skill() {
    document.getElementById("skillset").style.display = "block";
    document.getElementById("proj").style.display = "none";
    document.getElementById("educate").style.display = "none";
}

function educa() {
    document.getElementById("educate").style.display = "block";
    document.getElementById("skillset").style.display = "none";
    document.getElementById("proj").style.display = "none";
}

function myFunction(){
    let user = document.getElementById("user").value;
    uservalidation = /[a-z]/ 

    if(uservalidation.test(user)){
        document.getElementById("valid").style.display="block";
        document.getElementById("in-valid").style.display="none";
    }
   
    else{
        document.getElementById("in-valid").style.display="block";
    }

}

function emailFunction(){
    let email = document.getElementById("email").value;
    emailvalidation = /[a-z]/ 

    if(emailvalidation.test(email)){
        document.getElementById("valid-email").style.display="block";
        document.getElementById("in-email").style.display="none";
    }
   
    else{
        document.getElementById("in-email").style.display="block";
    }

}

function summit(){
    let user = document.getElementById("user").value;
    uservalidation = /[a-z]/ 
    let email = document.getElementById("email").value;
    emailvalidation = /[a-z]/ 

    if(emailvalidation.test(email) && uservalidation.test(user) ){
        document.getElementById("btn-sucess").style.display="block";
        document.getElementById("valid").style.display="none";
        document.getElementById("in-valid").style.display="none";
        document.getElementById("valid-email").style.display="none";
        document.getElementById("in-email").style.display="none";



    }
    
    var hidden = setInterval(hiddenContent, 3000);

    function hiddenContent(){
        document.getElementById("btn-sucess").style.display="none";
    }

    localStorage.setItem("user-name", user);
    localStorage.setItem("email-name", email);

}