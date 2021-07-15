const togglebtn = document.getElementById('toggle-btn')
const navbar = document.getElementsByTagName('nav')[0]

togglebtn.addEventListener('click',()=>{
    navbar.style.transition = " 1s all ease"
    navbar.classList.toggle('toggle')
})