let btn = document.getElementById("dangnhap-btn");

// Kiểm tra xem nút có đúng không
console.log(btn);

btn.addEventListener("click", (event) => {
    // Ngừng gửi form và tránh reload trang
    event.preventDefault();

    // Lấy dữ liệu người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];  // Lưu trữ người dùng

    // Lấy giá trị email và mật khẩu người dùng nhập
    let emailLogin = document.getElementById("email").value;
    let passLogin = document.getElementById("password").value;

    let check = true;

    // Kiểm tra email và mật khẩu
    if (!emailLogin) {
        alert("Email không được để trống");
        check = false;
    }

    if (!passLogin) {
        alert("Mật khẩu không được để trống");
        check = false;
    }

    // Kiểm tra email và mật khẩu đăng nhập
    if (check) {
        let userFound = users.find(user => user.email === emailLogin);  // Tìm người dùng theo email

        if (!userFound) {
            alert("Email không tồn tại");  // Nếu không tìm thấy người dùng
        } else if (userFound.password !== passLogin) {
            alert("Mật khẩu không chính xác");  // Nếu mật khẩu không đúng
        } else {
            alert("Đăng nhập thành công!");  // Nếu đăng nhập thành công
            location.href = "dashboard.html";  // Chuyển hướng đến trang quản lý hoặc trang chính
        }
    }
});
