let currentIndex = 0;
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
function updateSlider() {
    const offset = -currentIndex * 100; 
    slider.style.transform = `translateX(${offset}%)`;
}
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - 1; 
    }
    updateSlider();
});
// nav scrollspy
const navLinks = document.querySelectorAll('.nav-link');
function updateActiveLink() {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', updateActiveLink);
updateActiveLink();
// contact us
document.getElementById("contact").addEventListener('click',function(event){
event.preventDefault();
const error=document.querySelectorAll(".error-message");
error.forEach(el => el.style.display = 'none')
const firstname=document.getElementById("fname").value.trim();
const lastname=document.getElementById("lname").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();
let isvaild=true;
if(firstname===""){
document.getElementById("error-fname").textContent="first Name is required";
document.getElementById("error-fname").style.display="block";
document.getElementById("error-fname").style.color="red"
}if(lastname===""){
    document.getElementById("error-lname").textContent="last Name is required";
    document.getElementById("error-lname").style.display="block";
    document.getElementById("error-lname").style.color="red"
}
const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(email===""||!emailpattern.test(email)){
document.getElementById("error-email").textContent="vaild email is required";
document.getElementById("error-email").style.display="block";
document.getElementById("error-email").color="red"
}if(message===""){
    document.getElementById("messages").textContent="message is required";
    document.getElementById("messages").style.display="block";
    document.getElementById("message").style.color="red"
}if(isvaild){
    alert("form submit sucessfully")
}})