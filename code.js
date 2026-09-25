const submitId = document.getElementById('csubmit');
const thankS = document.getElementById('thanks');
const codeT = document.getElementById('code');

submitId.addEventListener ('click', ()=>{
    if (codeT.value ===""){
        return;
    }
    thankS.textContent = 'Your account is now fully secure and protected.!';
    setTimeout(()=>{
        thankS.style.display = 'none';
        return;

    },3000)
});

submitId.addEventListener ('click',() =>{
    const codeT = document.getElementById('code').value.trim();
    if (codeT ==="") {
        return;
    }

    const project = {
    user: codeT,
    
};
let projects = JSON.parse (localStorage.getItem("projects")) || [];
projects.push(project);
localStorage.setItem("projects", JSON.stringify(projects));



});

window.addEventListener ('pageshow',()=>{
    codeT.value= "";
})
