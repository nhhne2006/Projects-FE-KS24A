// Dữ liệu mẫu
let users = [
    {
        id: 1,
        first_name: "Nguyễn Hoàng",
        last_name: "Hiệu",
        gender: "",
        date_of_birth: "",
        avatar: "",
        email: "a@gmail.com",
        password: 12345678,
        phone_number: "",
        created_at: ""
    }
];

// Kiểm tra xem đã có dữ liệu "users" trong localStorage chưa
let storedUsers = localStorage.getItem("users");

if (!storedUsers) {
    // Nếu chưa có, lưu dữ liệu mẫu vào localStorage
    localStorage.setItem("users", JSON.stringify(users));
}
