let btn = document.getElementById("login-btn");

// Kiểm tra người dùng đã đăng nhập chưa
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("loggedInUser")) {
        location.href = "../dashboard.html"; // Nếu đã đăng nhập, chuyển sang Dashboard
    }
})

btn.addEventListener("click", () => {
    // Lấy dữ liệu người dùng từ localStorage   
    let data = JSON.parse(localStorage.getItem("data"))
    const users = data ? data.users : []; // Nếu có dữ liệu thì truy xuất users
    
    // Lấy giá trị email và mật khẩu người dùng nhập
    let emailLogin = document.getElementById("email").value;
    let passLogin = document.getElementById("password").value;

    let errorEmail = document.getElementById("error-email");
    let errorPass = document.getElementById("error-pass");
    let rememberMe = document.getElementById("checkBox").checked;

    let check = true;

    // Xóa thông báo cũ 
    errorEmail.textContent = "";
    errorPass.textContent = "";
    
    // Kiểm tra email và mật khẩu
    if (!emailLogin) {
        errorEmail.textContent = "Email không được để trống";
        check = false;
    }

    if (!passLogin) {
        errorPass.textContent = "Mật khẩu không được để trống";
        check = false;
    }
     
    // Kiểm tra email và mật khẩu đăng nhập
    if (check) {
        let userFound = users.find(user => user.email === emailLogin && user.password === passLogin);
        if (userFound) {
            alert("Đăng nhập thành công");
            // Lưu thông tin người dùng vào localStorage nếu chọn "Nhớ tài khoản"
            if (rememberMe) {
                localStorage.setItem("loggedInUser", JSON.stringify(userFound)); // Lưu vào localStorage
            } else {
                sessionStorage.setItem("loggedInUser", JSON.stringify(userFound)); // Lưu vào sessionStorage
            }
            location.href = "../dashboard.html"; // Chuyển sang trang Dashboard

        } else {
            // Nếu không tìm thấy người dùng với email và mật khẩu chính xác
            alert("Email hoặc mật khẩu không chính xác");
        }
    }
})