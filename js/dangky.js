const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    // trim để xóa khoảng trắng
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    let isValid = true;
    
    if(usernameValue === '') {
        setErrorFor(username, 'Tên người dùng không được để trống!');
        isValid = false;
    } else if (usernameValue.length < 5) { 
        setErrorFor(username, 'Tên người dùng phải trên 5 kí tự!');
        isValid = false;
    } else {
        setSuccessFor(username);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email không được để trống!');
        isValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email không hợp lệ!');
        isValid = false;
    } else {
        setSuccessFor(email);
    }
    
    if(passwordValue ==='') {
        setErrorFor(password, 'Mật khẩu không được để trống!');
        isValid = false;
    } else {
        setSuccessFor(password);
    }
    
    if(password2Value === '') {
        setErrorFor(password2, 'Xác minh mật khẩu không được để trống');
        isValid = false;
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Mật khẩu không trùng khớp!');
        isValid = false;
    } else{
        setSuccessFor(password2);
    }
    
    if(isValid) {
        alert('Đăng kí thành công');
    } else {
        alert('Đăng kí không thành công');
    }
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}