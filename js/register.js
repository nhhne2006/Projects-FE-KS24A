let errorFirstName = document.getElementById('error-first-name');
let errorLastName = document.getElementById('error-last-name');
let errorEmail = document.getElementById('error-email');
let errorPassword = document.getElementById('error-password');
let errorConfirmPassword = document.getElementById('error-confirm-password');
let errorCheckbox = document.getElementById('error-checkbox');
let registerButton = document.getElementById("register-button");
let checkbox = document.getElementById('checkbox');

// Khi nhấn nút Đăng ký
registerButton.addEventListener("click", () => {
    // Lấy dữ liệu nếu có dữ liệu thì truy xuất đến users
    const data = JSON.parse(localStorage.getItem("data"));
    const users = data ? data.users : [];

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('password-confirm').value;

    // Xóa thông báo lỗi cũ
    errorFirstName.textContent = "";
    errorLastName.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    errorConfirmPassword.textContent = "";
    errorCheckbox.textContent = "";

    let emailRegex = /^[^@]{2,64}@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,63}$/;
    let check = true;

    // Kiểm tra First Name
    if (!firstName) {
        errorFirstName.textContent = "Họ và tên lót không được để trống";
        check = false;
    }

    // Kiểm tra Last Name
    if (!lastName) {
        errorLastName.textContent = "Tên không được để trống";
        check = false;
    }

    // Kiểm tra Email
    if (!email) {
        errorEmail.textContent = "Email không được để trống";
        check = false;
    } else if (!email.match(emailRegex)) {
        errorEmail.textContent = "Email không đúng định dạng";
        check = false;
    } else {
        // Kiểm tra email có trùng không
        let emailExists = users.some(user => user.email === email);
        if (emailExists) {
            errorEmail.textContent = "Email đã tồn tại";
            check = false;
        }
    }

    // Kiểm tra Password
    if (!password) {
        errorPassword.textContent = "Mật khẩu không được để trống";
        check = false;
    } else if (password.length < 8) {
        errorPassword.textContent = "Mật khẩu có ít nhất có 8 ký tự";
        check = false;
    }

    // Kiểm tra Confirm Password
    if (!confirmPassword) {
        errorConfirmPassword.textContent = "Mật khẩu xác nhận không được để trống";
        check = false;
    } else if (confirmPassword !== password) {
        errorConfirmPassword.textContent = "Mật khẩu xác nhận không khớp";
        check = false;
    }

    // Kiểm tra Checkbox
    if (!checkbox.checked) {
        errorCheckbox.textContent = "Vui lòng xác nhận";
        check = false;
    }

    // Nếu không có lỗi, lưu người dùng mới vào localStorage
    if (check) {
        let newUser = {
            id: users.length > 0 ? Math.max(...users.map(x => x.id)) + 1 : 1,
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        };

        users.push(newUser);
        data.users = users;
        localStorage.setItem("data", JSON.stringify(data));
        alert("Đăng ký thành công");
        location.href = "login.html";
    }
});
