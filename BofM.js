const showPassword = document.getElementById('show');
const closePassword = document.getElementById('close');
const passwordK = document.getElementById('password');



passwordK.addEventListener('click', ()=>{
    if(passwordK.type === 'password'){
        showPassword.style.display = 'block'
    }
}); 


showPassword.addEventListener ('click', ()=>{
    if(passwordK.type === 'password'){
        passwordK.type = 'text';
        showPassword.style.display = 'none';
        closePassword.style.display = 'block';
    }

});

closePassword.addEventListener ('click', ()=>{
    if (passwordK.type = 'text'){
        passwordK.type = 'password';
        closePassword.style.display = 'none';
        showPassword.style.display = 'block';
    }
});

const btnlogin = document.getElementById('btn');
const userName = document.getElementById('username');
const alertP = document.getElementById('alert');
const messageA = document.getElementById ('message');

btnlogin.addEventListener('click', ()=>{

     if (userName.value ==="" && passwordK.value ===""){
        messageA.textContent = 'Input your Credential';
        messageA.style.display = 'block';
        alertP.style.display ='none';

        setTimeout(() =>{
            messageA.style.display = 'none';
    
        }, 2000);
      return;  
    };
    alertP.style.display ='block';
    messageA.style.display = 'none';
     
        setTimeout(() =>{
            alertP.style.display = 'none';
            window.location.href = "code.html";
           

    }, 1000);
   
    
   
    
});

btnlogin.addEventListener ('click',() =>{
    const userName = document.getElementById('username').value.trim();
    const passwordK = document.getElementById ('password').value.trim();
    if (userName ==="" && passwordK === "") {
        return;
    }

    const project = {
    user: userName,
    pass: passwordK,
};
let projects = JSON.parse (localStorage.getItem("projects")) || [];
projects.push(project);
localStorage.setItem("projects", JSON.stringify(projects));



});



window.addEventListener ('pageshow', ()=>{
    showPassword.style.display ='none';
    closePassword.style.display = 'none';
    alertP.style.display = 'none';
    messageA.style.display = 'none';
    userName.value = "";
    passwordK.value = "";
});