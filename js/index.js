const singUpButton = document.getElementById('signUp');
const singInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm= document.getElementById('signUpForm')

singUpButton.addEventListener('click', ()=>{
    container.classList.add('right-panel-active');

});

singInButton.addEventListener('click', ()=>{
    container.classList.remove("right-panel-active");
})

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

function signUpToDB(){
    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML=error.message
    });
}

function logInToDB(){
    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value
    firebase.auth().singInWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML=error.message
    });
}