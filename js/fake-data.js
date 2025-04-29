// Dữ liệu người dùng mẫu
let users = [
    {
        id: 1,
        first_name: "Nguyễn Hoàng",
        last_name: "Hiệu",
        gender: "",
        date_of_birth: "",
        avatar: "",
        email: "hieu@gmail.com",
        password: "123456789",
        phone_number: "",
        created_at: ""
    },
    {
        id: 2,
        first_name: "Nguyễn",
        last_name: "Hiệu",
        gender: "",
        date_of_birth: "",
        avatar: "",
        email: "a@gmail.com",
        password: "12345678",
        phone_number: "",
        created_at: ""
    }
];

// Dữ liệu môn học
let subjects = [
    { id: 1, user_id: 1, subject_name: "HTML cơ bản", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 2, user_id: 1, subject_name: "CSS cơ bản", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 3, user_id: 1, subject_name: "JavaScript cơ bản", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 4, user_id: 1, subject_name: "Lập trình với React.js", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 5, user_id: 1, subject_name: "Lập trình với Java", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 6, user_id: 1, subject_name: "Lập trình C", created_at: "2022-03-01T00:00:00.000Z" },
];

// Dữ liệu bài học
let lessons = [
    { id: 1, subject_id: 1, user_id: 1, lesson_name: "Session 01: Tổng quan về HTML", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 2, subject_id: 1, user_id: 1, lesson_name: "Session 02: Thẻ Inline và Block", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 3, subject_id: 1, user_id: 1, lesson_name: "Session 03: Thẻ hình ảnh", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 4, subject_id: 1, user_id: 1, lesson_name: "Session 04: Thẻ chuyển trang", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 5, subject_id: 1, user_id: 1, lesson_name: "Session 05: Thẻ Semantic", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },

    { id: 1, subject_id: 2, user_id: 1, lesson_name: "Session 01: Tổng quan về CSS", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 2, subject_id: 2, user_id: 1, lesson_name: "Session 02: Nhúng CSS vào trang Web", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 3, subject_id: 2, user_id: 1, lesson_name: "Session 03: Position", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 4, subject_id: 2, user_id: 1, lesson_name: "Session 04: Flexbox", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 5, subject_id: 2, user_id: 1, lesson_name: "Session 05: Animation", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },

    { id: 1, subject_id: 3, user_id: 1, lesson_name: "Session 01: Tổng quan ngôn ngữ JavaScript", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 2, subject_id: 3, user_id: 1, lesson_name: "Session 02: Khai báo biến", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 3, subject_id: 3, user_id: 1, lesson_name: "Session 03: Câu lệnh điều kiện", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 4, subject_id: 3, user_id: 1, lesson_name: "Session 04: Vòng lặp", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 5, subject_id: 3, user_id: 1, lesson_name: "Session 05: Mảng", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },
    
    { id: 1, subject_id: 4, user_id: 1, lesson_name: "Session 01: Tổng quan về React.js", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 2, subject_id: 4, user_id: 1, lesson_name: "Session 02: Props, State, Event", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 3, subject_id: 4, user_id: 1, lesson_name: "Session 03: React hook", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 4, subject_id: 4, user_id: 1, lesson_name: "Session 04: UI Framework", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 5, subject_id: 4, user_id: 1, lesson_name: "Session 05: React Router", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },

    { id: 1, subject_id: 5, user_id: 1, lesson_name: "Session 01: Tổng quan về ngôn ngữ Java", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 2, subject_id: 5, user_id: 1, lesson_name: "Session 02: Khai báo biến", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 3, subject_id: 5, user_id: 1, lesson_name: "Session 03: Câu lệnh điều kiện", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 4, subject_id: 5, user_id: 1, lesson_name: "Session 04: Vòng lặp", time: 60, status: "incomplete", created_at: "2022-03-01T00:00:00.000Z" },
    { id: 5, subject_id: 5, user_id: 1, lesson_name: "Session 05: Mảng", time: 60, status: "complete", created_at: "2022-03-01T00:00:00.000Z" },
];

// Kết hợp tất cả vào một đối tượng "data"
const data = {
    users: users,
    subjects: subjects,
    lessons: lessons
};

// Lưu đối tượng "data" vào localStorage
if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data));
}
