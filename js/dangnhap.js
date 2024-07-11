var correct_user = 'admin';
var correct_password = 'admin';

const form = document.getElementById('formlogin');
const username = document.getElementById('username');
const password = document.getElementById('password');

var formlogin = document.getElementById('formlogin');

if(formlogin.attachEvent)
{
    formlogin.attachEvent('submit', onFormSubmit);
} else{
    formlogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e){
    e.preventDefault();//ngăn chặn sự kiện mặc định load lại trang
    var username = document.getElementById('username').value;//lấy giá trị id username
    var password = document.getElementById('password').value;//lấy giá trị id password

    if(username == correct_user && password == correct_password)
    {
        alert('Đăng nhập thành công!');
    } else {
        alert('Đăng nhập thất bại!');
    }
}
