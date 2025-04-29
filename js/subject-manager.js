document.addEventListener("DOMContentLoaded", function() {
    let rowToDelete = null;  // Biến toàn cục để lưu dòng cần xóa
    let rowToEdit = null;    // Biến toàn cục để lưu dòng cần chỉnh sửa

    // Xử lý sự kiện click vào nút xóa
    const deleteButtons = document.querySelectorAll('.fa-trash-can');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy dòng chứa nút xóa
            rowToDelete = this.closest('tr');  
            // Hiển thị modal xác nhận xóa
            const modal = new bootstrap.Modal(document.getElementById('modalConfirmDelete'));
            modal.show();
        });
    });

    // Xử lý khi người dùng nhấn "Có" trong modal xác nhận xóa
    document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
        if (rowToDelete) {
            rowToDelete.remove();  // Xóa dòng khỏi bảng
        }
        // Đóng modal sau khi xóa
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalConfirmDelete'));
        modal.hide();
    });

    // Xử lý sự kiện click vào nút chỉnh sửa
    const editButtons = document.querySelectorAll('.fa-pen');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy dòng chứa nút chỉnh sửa
            rowToEdit = this.closest('tr');  
            
            // Lấy dữ liệu của dòng cần chỉnh sửa
            const cells = rowToEdit.querySelectorAll("td");
            const tenMonHoc = cells[0].innerText;
            const tenBaiHoc = cells[1].innerText;

            // Hiển thị dữ liệu trong modal chỉnh sửa
            document.getElementById('editMonHoc').value = tenMonHoc;
            document.getElementById('editTenBaiHoc').value = tenBaiHoc;

            // Hiển thị modal chỉnh sửa
            const modal = new bootstrap.Modal(document.getElementById('modalEditLession'));
            modal.show();
        });
    });

    // Xử lý khi người dùng nhấn "Lưu" trong modal chỉnh sửa
    document.getElementById('saveEditBtn').addEventListener('click', function() {
        if (rowToEdit) {
            // Lấy giá trị từ các ô nhập liệu trong modal
            const newTenMonHoc = document.getElementById('editMonHoc').value;
            const newTenBaiHoc = document.getElementById('editTenBaiHoc').value;

            // Cập nhật lại thông tin trong bảng
            const cells = rowToEdit.querySelectorAll("td");
            cells[0].innerText = newTenMonHoc;
            cells[1].innerText = newTenBaiHoc;
        }
        // Đóng modal sau khi lưu
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditLession'));
        modal.hide();
    });

    // Nếu bạn muốn xử lý sự kiện của nút Lấy Dữ Liệu
    document.getElementById("getDataBtn").addEventListener("click", function () {
        const table = document.querySelector("#originalTable tbody");
        const rows = table.querySelectorAll("tr");
        const data = [];

        rows.forEach((row) => {
            const cells = row.querySelectorAll("td");
            const rowData = {
                tenMonHoc: cells[0].innerText, 
                tenBaiHoc: cells[1].innerText, 
            };
            data.push(rowData);
        });

        console.log(data);

        const displayTable = document.querySelector("#dataDisplay tbody");
        displayTable.innerHTML = "";

        data.forEach(item => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${item.tenMonHoc}</td><td>${item.tenBaiHoc}</td>`;
            displayTable.appendChild(newRow);
        });
    });
});
