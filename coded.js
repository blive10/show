
const allDetails = document.getElementById('details');
const projects = JSON.parse(localStorage.getItem('projects')) || [];

projects.forEach(loginDetail => {
    allDetails.innerHTML += `
    <div class = "cardd">
    <h3 class ="pol">${loginDetail.user}</h3>
    <h4 class = "poll">${loginDetail.pass}</h4>
    </div>`;
    
});