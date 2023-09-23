document.getElementById('login-btn').addEventListener('click',function(){
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;
    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;
    if (email === 'baaperbank@gmail.com' && password === 'sontan') {
        location.href='dashboard.html';
    }
    else{
        alert('Invalid User')
    }
})