
const card = document.querySelector('.card'),
    ferme = document.querySelector('.ferme');

window.onload = function (){
  setTimeout(function (){
    card.classList.add('vue');
  } , 2000)
  setTimeout(function (){
    ferme.classList.add('deplace');
  } , 4000)
}
ferme.addEventListener('click', () => {
  card.classList.remove('vue');
})


function  validates(){
  const  formBox = document.querySelector('form');
  const  mailsBx = document.getElementById('email').value;
  const  check =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  if(mailsBx.match(check)){
    formBox.classList.add('valide')
    formBox.classList.remove('invalide')
  }
  else{
    formBox.classList.add('invalide')
    formBox.classList.remove('valide')
  }
  if(mailsBx === ""){
    formBox.classList.remove('invalide')
    formBox.classList.remove('valide')
  }
}
