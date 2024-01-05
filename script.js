

const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', function(e){
    if(!validatePassword()){
        e.preventDefault();
    }
});

function validatePassword(){
    var errorPass = document.querySelector('#error-pass');
    var passwordInput = document.querySelector('#password').value;
    var confirmPasswordInput = document.querySelector('#confirm-password').value;

    if (passwordInput !== confirmPasswordInput){
        errorPass.textContent = '*Passwords do not match';
        return false;
    }
    else {
        window.location.href = 'results.html'
        errorMsg.textContent = '';
        return true;
    }
}

