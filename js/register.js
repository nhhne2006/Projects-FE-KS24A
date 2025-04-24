let errorHo = document.getElementById('error-ho');
let errorTen = document.getElementById('error-ten');
let errorEmail = document.getElementById('error-email');
let errorPass = document.getElementById('error-pass');
let btn = document.getElementById("dangky-btn");
let checkbox = document.getElementById('checkbox');

// Ban đầu, vô hiệu hóa nút Đăng ký
btn.disabled = true; 

// Theo dõi sự thay đổi trạng thái của checkbox
checkbox.addEventListener('click', () => {
    // Nếu checkbox được tick, bật nút Đăng ký
    btn.disabled = false; // Nếu không được chọn, nút Đăng ký sẽ bị tắt
});

// Khi nhấn nút Đăng ký
btn.addEventListener("click", (event) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let ho = document.getElementById('ho').value;
    let ten = document.getElementById('ten').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    // Xóa thông báo lỗi cũ
    errorHo.textContent = "";
    errorTen.textContent = "";
    errorEmail.textContent = "";
    errorPass.textContent = "";

    let emailRegex = /^[^@]{2,64}@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,63}$/;
    let check = true;

    // Kiểm tra họ
    if (!ho) {
        errorHo.textContent = "Họ và tên đệm không được để trống";
        check = false;
    }

    // Kiểm tra tên
    if (!ten) {
        errorTen.textContent = "Tên không được để trống";
        check = false;
    }

    // Kiểm tra email
    if (!email) {
        errorEmail.textContent = "Email không được để trống";
        check = false;
    } else if (!email.match(emailRegex)) {
        errorEmail.textContent = "Email không đúng định dạng";
        check = false;
    }

    // Kiểm tra mật khẩu
    if (!pass) {
        errorPass.textContent = "Mật khẩu không được để trống";
        check = false;
    } else if (pass.length < 8) {
        errorPass.textContent = "Mật khẩu ít nhất có 8 ký tự";
        check = false;
    }

    // Nếu không có lỗi, lưu người dùng mới vào localStorage
    if (check) {
        let newUser = {
            id: users.length > 0 ? Math.max(...users.map(x => x.id)) + 1 : 1,
            username: ten,
            email: email,
            password: pass
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công");
        location.href = "login.html";
    }
});
