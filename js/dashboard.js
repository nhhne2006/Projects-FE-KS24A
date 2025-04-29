document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra xem người dùng đã đăng nhập chưa (tìm thông tin trong localStorage và sessionStorage)
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser")) || JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Nếu không có người dùng đăng nhập, chuyển về trang đăng ký
    if (!currentUser) {
        location.href = "../pages/auth/register.html"; // Nếu không có user đã đăng nhập, chuyển về đăng ký
        return; // Dừng xử lý nếu không có user
    }

    const userId = currentUser.id;
    
    // Lấy dữ liệu từ localStorage
    const data = JSON.parse(localStorage.getItem("data"));

    // Lọc dữ liệu môn học và bài học theo user_id
    const userSubjects = data.subjects.filter(subject => subject.user_id === userId);
    const userLessons = data.lessons.filter(lesson => lesson.user_id === userId);

    // Lấy phần tử chứa các khóa học
    const container = document.querySelector('.container');

    // Hiển thị môn học và bài học của người dùng
    userSubjects.forEach(subject => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course'); 
        courseElement.innerHTML = `
            <h3>${subject.subject_name}</h3>
            <ul>
                ${userLessons.filter(lesson => lesson.subject_id === subject.id).map(lesson => `
                    <li>
                        <input type="checkbox" id="session${lesson.id}">
                        <label for="session${lesson.id}">${lesson.lesson_name}</label>
                    </li>
                `).join('')}
            </ul>
            <a href="#">Xem thêm</a>
        `;
        container.appendChild(courseElement);
    });

    // Xử lý đăng xuất
    const logoutBtn = document.getElementById('logout-icon');
    logoutBtn.addEventListener('click', () => {
        // Hiển thị hộp thoại xác nhận khi người dùng muốn đăng xuất
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất?");

        if (isConfirmed) {
            localStorage.removeItem("loggedInUser");  // Xóa người dùng đăng nhập khỏi localStorage
            sessionStorage.removeItem("loggedInUser");  // Xóa người dùng đăng nhập khỏi sessionStorage
            location.href = "../pages/auth/login.html";  // Chuyển hướng về trang đăng nhập
        }
    });
});
