let coverLogin = document.querySelector('.login-page-cover')
let loginPageStarted = document.querySelector('.login-page-started')

function moveAndResizeElems(){
   coverLogin.classList.toggle('move-cover')
   coverLogin.classList.toggle('move-cover-width')
   coverLogin.classList.toggle('move-cover-border-radius')
}

coverLogin.addEventListener('click', moveAndResizeElems)
loginPageStarted.addEventListener('click', moveAndResizeElems)


