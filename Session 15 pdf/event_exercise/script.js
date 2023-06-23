// khi cập nhập hoặc reload dom
window.addEventListener("DOMContentLoaded", () => {
    renderData();
});
// Tạo biến toàn cục mảng 2 chiều để push dữ liệu lấy từ form
let studentList = [
    ["SV001","Nguyen van a" , "abc@gmail.com" ,"088888888","HN","Nam"]
];
// Lấy ra phần tử được render dữ liệu
// Truy cập vào tbody nơi được render dữ liệu
let tbody=document.getElementById("content");

// đặt 1 biến toàn cục mặc định là create
let action = "create";

// Hàm render dữ liệu từ studentList ra tbody
function renderData() {
    // Đặt tbody chưa chứa dữ liệu, nếu k thì khi render add dữ liệu sẽ bị lặp 
    tbody.innerHTML= "";
    // Duyệt dữ liệu trong mảng studentList
    for (let i=0; i<studentList.length; i++) {
        // render dữ liệu từng dòng của tbody
        tbody.innerHTML += `<tr>
                                <td>${i+1}</td>
                                <td>${studentList[i][0]}</td>
                                <td>${studentList[i][1]}</td>
                                <td>${studentList[i][2]}</td>                                
                                <td>${studentList[i][3]}</td>                                
                                <td>${studentList[i][4]}</td>  
                                <td>${studentList[i][5]}</td>  
                                <td>
                                    <button onclick="editStudent('${studentList[i][0]}')">Edit</button>
                                    <button onclick="removeStudent('${studentList[i][0]}')">Delete</button>
                                </td>
                                <td>${studentList[i][7]}</td>
                           
                            </tr>`
    }
}

// Hàm validate dữ liệu người dùng nhập vào khi thêm mới hoặc cập nhật
function validateForm() {
    // b1: lấy dữ liệu ở form
    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("fullName").value;
    let studentEmail = document.getElementById("mail").value;
    let studentPhone = document.getElementById("phone").value;
    let studentAddress = document.getElementById("address").value;
    let studentSex = document.querySelector("input[name='sex']:checked").value;

// b2: thực hiện validate, nếu thoả mãn --> true, có lỗi thông báo --> false

    // validate studentId k được để trống
    if (studentId=="") {
        alert("Vui lòng nhập mã sinh viên");
        return false;
    }
    let i = getStudentByStudentId (studentId);
    if (i>=0) {
        alert("Mã sinh viên đã tồn tại, vui lòng nhập lại");
        return false;
    }
    // validate studentName k được để trống
    if (studentName=="") {
        alert("Vui lòng nhập họ và tên");
        return false;
    }
    // Nhập đúng định dạng email
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!studentEmail.match(regexMail)) {
        alert("Vui lòng nhập email đúng định dạng");
        return false;
    }
    // Nhập đúng dịnh dạng số điện thoại di động VN
    let regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!studentPhone.match(regexPhone)) {
        alert("Vui lòng nhập số điện thoại đúng định dạng vùng Việt Nam");
        return false;
    }
    // Không được bỏ trống địa chỉ quê quán
    if (studentAddress=="") {
        alert("Vui lòng nhập địa chỉ quê quán");
        return false;
    }
    return true;
}

// Hàm thực hiện thêm mới hoặc cập nhật sinh viên
function createOrEdit() {
    if (validateForm()) {
        // nếu validateForm đúng thì thực hiện thêm mới hoặc cập nhật
        // nếu k thì tiếp tục kiểm tra dữ liệu
        // thực hiện thêm mới hay cập nhật thì đều cần lấy dữ liệu form nên b1 để ở ngoài dùng chung
        // 1.lấy dữ liệu từ form
        let studentId = document.getElementById("studentId").value;
        let studentName = document.getElementById("fullName").value;
        let studentEmail = document.getElementById("mail").value;
        let studentPhone = document.getElementById("phone").value;
        let studentAddress = document.getElementById("address").value;
        let studentSex = document.querySelector("input[name='sex']:checked").value;

        if (action=="create") {
            // thực hiện thêm mới sinh viên

            // b2. push sinh viên vào mảng 2 chiều studentlist
            studentList.push ([studentId, studentName, studentEmail, studentPhone, studentAddress, studentSex]);
        } else {
            // Thực hiện cập nhật sinh viên
            // 2. lấy chỉ số sinh viên trong mảng
            let i = getStudentByStudentId (studentId);
            // 3.Cập nhật dữ liệu
            studentList [i][1] = studentName;
            studentList [i][2] = studentEmail;
            studentList [i][3] = studentPhone;
            studentList [i][4] = studentAddress;
            studentList [i][5] = studentSex;
            // Cho phép nhập studentId
            document.getElementById("studentId").readOnly = false;
        }
        // 3.Xoá dữ liệu trên form (dùng chung cho creat và edit)
        document.getElementById("studentId").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";
        document.getElementById("male").checked = true;
        // render lại dữ liệu trên table
        renderData();
    }
}

// Hàm lấy chỉ số sinh viên trong studentList từ studentId
function getStudentByStudentId(studentId) {
    for (i=0; i<studentList.length; i++) {
        if (studentId==studentList[i][0]) {
            return i;
        }
    }
    return -1;
}

// Hàm thực hiện lấy studentId từ table, lấy dữ liệu từ studentList
function editStudent(studentId) {
    // 1. lấy chỉ số sinh viên trong mảng
    let i = getStudentByStudentId(studentId);
    // 2. fill thông tin sinh viên ra form
    if (i>=0) {
        document.getElementById("studentId").value = studentList[i][0];
        document.getElementById("fullName").value = studentList[i][1];
        document.getElementById("mail").value = studentList[i][2];
        document.getElementById("phone").value = studentList[i][3];
        document.getElementById("address").value = studentList[i][4];
        if (studentList[i][5]=="male") {
            document.getElementById("male").checked = true;
        } else {
            document.getElementById("female").checked = true;
        }
        // đổi action = edit
        action ="edit";
        // để studentId thành readOnly
        document.getElementById("studentId").readOnly = true;
    }
        
}

// hàm thực hiện xoá sinh viên
function removeStudent(studentId) {
    // 1.Lấy index của sinh viên trong mảng
    let i = getStudentByStudentId (studentId)
     // 2. thực hiện xoá theo index
    studentList.splice(i,1);
    // 3.render lại dữ liệu
    renderData();
}

// khi trình duyệt load thì sẽ hiển thị dữ liệu studenet và hiển thị trên table
document.onload = renderData();
// truy cập vào phần tử save và gắn sự kiện click
let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", function(event) {
    // Chặn sự kiện submit default của form 
    event.preventDefault();
    createOrEdit();
});

  