// Tạo div bao bên ngoài
let div = document.createElement('div');
div.setAttribute ("id" , "container");
document.body.appendChild(div);
div.style.width='1500px';
div.style.height='400px';
div.style.border= '1px solid #ddd';
div.style.borderRadius = '10px';
div.style.boxShadow = '1px 1px 20px';
div.style.margin = '50px auto';
div.style.display='flex';

// Tạo div bên trái 
let divLeft = document.createElement('div');
div.appendChild(divLeft);
divLeft.style.width= '430px';
divLeft.style.height= '330px';
divLeft.style.border ='1px solid #ddd';
divLeft.style.margin='20px';
divLeft.style.padding='10px';

// Tạo form 
let form = document.createElement('form');
form.setAttribute("action" , "#");
divLeft.appendChild(form);

// Nội dung form 
let h2Form = document.createElement('h2');
h2Form.textContent = "Thông tin học viên"
form.appendChild(h2Form);
h2Form.style.fontSize='30px';
h2Form.style.textAlign ='center';

// Tạo ô nhập tên và add vào form
let labelName = document.createElement('label');
labelName.setAttribute("for" , "fullName");
labelName.textContent= "Họ và tên : ";
let inputName= document.createElement('input');
inputName.type='text';
inputName.placeholder = "Vui lòng nhập tên";
form.appendChild(labelName);
form.appendChild(inputName);
form.appendChild(document.createElement('br'));
labelName.style.fontSize = '22px';
labelName.style.margin='10px';
inputName.style.fontSize = '18px';
inputName.style.marginLeft = '30px';

// Tạo ô nhập mail và add vào form      
let labelMail = document.createElement('label');
labelMail.textContent= "Email : ";
let inputMail= document.createElement('input');
inputMail.type='email';
inputMail.placeholder = "Vui lòng nhập email";
form.appendChild(labelMail);
form.appendChild(inputMail);
form.appendChild(document.createElement('br'));
labelMail.style.fontSize = '22px';
labelMail.style.margin='10px';
inputMail.style.fontSize = '18px';
inputMail.style.marginTop='10px';
inputMail.style.marginBottom='10px';
inputMail.style.marginLeft = '65px';

// Tạo ô nhập sdt và add vào form
let labelPhone = document.createElement('label');
labelPhone.innerText= "Số điện thoại : ";
let inputPhone = document.createElement('input');
inputPhone.type='number';
inputPhone.placeholder = "Vui lòng nhập số điện thoại";
form.appendChild(labelPhone);
form.appendChild(inputPhone);
form.appendChild(document.createElement('br'));
labelPhone.style.fontSize = '22px';
labelPhone.style.margin='10px';
inputPhone.style.width ='230px'
inputPhone.style.fontSize = '18px';
inputPhone.style.marginBottom='10px';

// Tạo ô nhập địa chỉ và add vào form
let labelAddress = document.createElement('label');
labelAddress.innerText= "Quê quán : ";
let inputAddress = document.createElement('input');
inputAddress.type='text';
inputAddress.placeholder = "Vui lòng nhập địa chỉ quê quán";
form.appendChild(labelAddress);
form.appendChild(inputAddress);
form.appendChild(document.createElement('br'));
labelAddress.style.fontSize = '22px';
labelAddress.style.margin='10px';
inputAddress.style.width ='250px'
inputAddress.style.fontSize = '18px';
inputAddress.style.marginBottom='10px';
inputAddress.style.marginLeft = '30px';

// Tạo ô chọn giới tính và add vào form
let labelSex = document.createElement('label');
labelSex.innerText= "Giới tính : ";
let radio1 = document.createElement('input');
radio1.type='radio';
radio1.value = 'male';
let labelGender1 = document.createElement('label');
labelGender1.innerText = 'Nam';
form.appendChild(labelSex);
form.appendChild(radio1);
form.appendChild(labelGender1);
labelSex.style.fontSize = '22px';
labelSex.style.margin='10px';
labelGender1.style.marginRight='20px'
radio1.style.fontSize = '18px';
radio1.style.marginBottom='10px';
radio1.style.marginLeft = '30px';


let radio2 = document.createElement('input');
radio2.type='radio';
radio1.value = 'female';
let labelGender2 = document.createElement('label');
labelGender2.innerText = 'Nữ';
form.appendChild(radio2);
form.appendChild(labelGender2);
form.appendChild(document.createElement('br'));

let button = document.createElement('button');
button.innerText='Lưu lại';
form.appendChild(button);
button.style.width = '100px';
button.style.height= '30px';
button.style.margin= '20px 150px';



// Tạo div bên phải 
let divRight = document.createElement('div');
div.appendChild(divRight);
divRight.style.width= '900px';
divRight.style.height= '330px';
divRight.style.border ='1px solid #ddd';
divRight.style.margin='20px';
divRight.style.padding='10px';

// Tạo nội dung bên phải
let h2DivRight = document.createElement('h2');
h2DivRight.innerText = "Danh sách học viên";
divRight.appendChild(h2DivRight);
h2DivRight.style.fontSize='30px';
h2DivRight.style.textAlign ='center';

let labelSearch = document.createElement('label');
labelSearch.innerText= "Tìm kiếm học viên : ";
labelSearch.style.fontSize = '22px';
labelSearch.style.marginLeft = '20px';
let inputSearch = document.createElement('input');
inputSearch.style.height='20px';
inputSearch.style.width = "200px";
inputSearch.style.marginLeft = "5px";
inputSearch.style.marginRight = "5px";
let buttonFormRight = document.createElement('button');
buttonFormRight.innerText='Search';
buttonFormRight.style.width = '100px';
buttonFormRight.style.height= '25px';
buttonFormRight.style.marginLeft = '20px';

divRight.appendChild(labelSearch);
divRight.appendChild(inputSearch);
divRight.appendChild(buttonFormRight);

// Tạo bảng
let table = document.createElement('table');
divRight.appendChild(table);
table.style.border = "1px solid gray";
table.style.marginLeft = "10px";
table.style.marginTop = "15px";
table.style.width = "880px";
table.style.height = "110px";
table.style.textAlign = "center";
// thead
let thead = document.createElement('thead');
table.appendChild(thead);

let tr1=document.createElement('tr');
thead.appendChild(tr1);

let thStt = document.createElement("th");
tr1.appendChild(thStt);
thStt.innerHTML = "#";
thStt.style.border="1px solid #aaa";

let thFullName = document.createElement("th");
tr1.appendChild(thFullName);
thFullName.innerText = "Họ tên";
thFullName.style.border = "1px solid #aaa";

let thEmail = document.createElement("th");
tr1.appendChild(thEmail);
thEmail.innerText = "Email";
thEmail.style.border = "1px solid  #aaa";

let thPhone= document.createElement("th");
tr1.appendChild(thPhone);
thPhone.innerText = "Điện thoại";
thPhone.style.border = "1px solid  #aaa";

let thAddress = document.createElement("th");
tr1.appendChild(thAddress);
thAddress.innerText = "Địa chỉ";
thAddress.style.border = "1px solid  #aaa";

let thGender = document.createElement("th");
tr1.appendChild(thGender);
thGender.innerText = "Gender";
thGender.style.border = "1px solid  #aaa";

let thAction = document.createElement("th");
tr1.appendChild(thAction);
thAction.innerText = "Hành động";
thAction.style.border = "1px solid  #aaa";

let th = document.createElement("th");
tr1.appendChild(th);
th.style.border = "1px solid  #aaa";

let thButton = document.createElement("input");
th.appendChild(thButton);
thButton.setAttribute("type", "button");
thButton.setAttribute("value", "sắp xếp (alpha b)");
thButton.style.width = "95%";
thButton.style.height = "100%";

// tbody

let tbody = document.createElement("tbody");
table.appendChild(tbody);

let tr2 = document.createElement("tr");
tbody.appendChild(tr2);

let tdStt1 = document.createElement("td");
tr2.appendChild(tdStt1);
tdStt1.innerHTML = "1";
tdStt1.style.border = "1px solid #aaa";

let tdName1 = document.createElement("td");
tr2.appendChild(tdName1);
tdName1.innerHTML = "Nguyễn Văn A";
tdName1.style.border = "1px solid  #aaa";

let tdMail1 = document.createElement("td");
tr2.appendChild(tdMail1);
tdMail1.innerHTML = "rikkei@gmail.com";
tdMail1.style.border = "1px solid  #aaa";

let tdPhone1 = document.createElement("td");
tr2.appendChild(tdPhone1);
tdPhone1.innerHTML = "0823868888";
tdPhone1.style.border = "1px solid  #aaa";

let tdAddress1 = document.createElement("td");
tr2.appendChild(tdAddress1);
tdAddress1.innerHTML = "hà nội";
tdAddress1.style.border = "1px solid  #aaa";

let tdGender1 = document.createElement("td");
tr2.appendChild(tdGender1);
tdGender1.innerHTML = "nam";
tdGender1.style.border = "1px solid  #aaa";

let tdSort1 = document.createElement("td");
tr2.appendChild(tdSort1);
tdSort1.style.border = "1px solid  #aaa";

// tạo 2 thẻ edit và delete
let tdSort1Edit = document.createElement("button");
tdSort1.appendChild(tdSort1Edit);
tdSort1Edit.innerHTML = "edit";
tdSort1Edit.style.marginRight = "10px";

let tdSort1Delete = document.createElement("button");
tdSort1.appendChild(tdSort1Delete);
tdSort1Delete.innerHTML = "delete";

let tr3 = document.createElement("tr");
tbody.appendChild(tr3);

let tdStt2 = document.createElement("td");
tr3.appendChild(tdStt2);
tdStt2.innerHTML = "2";
tdStt2.style.border = "1px solid  #aaa";

let tdName2 = document.createElement("td");
tr3.appendChild(tdName2);
tdName2.innerHTML = "Nguyễn Thị B";
tdName2.style.border = "1px solid  #aaa";

let tdMail2 = document.createElement("td");
tr3.appendChild(tdMail2);
tdMail2.innerHTML = "academy@gmail.com";
tdMail2.style.border = "1px solid  #aaa";

let tdPhone2 = document.createElement("td");
tr3.appendChild(tdPhone2);
tdPhone2.innerHTML = "0828638888";
tdPhone2.style.border = "1px solid  #aaa";

let tdAddress2 = document.createElement("td");
tr3.appendChild(tdAddress2);
tdAddress2.innerHTML = "HCM";
tdAddress2.style.border = "1px solid  #aaa";

let tdGender2 = document.createElement("td");
tr3.appendChild(tdGender2);
tdGender2.innerHTML = "nữ";
tdGender2.style.border = "1px solid  #aaa";

let tdSort2 = document.createElement("td");
tr3.appendChild(tdSort2);
tdSort2.style.border = "1px solid  #aaa";

// tạo 2 thẻ edit và delete
let tdSort2Edit = document.createElement("button");
tdSort2.appendChild(tdSort2Edit);
tdSort2Edit.innerHTML = "edit";
tdSort2Edit.style.marginRight = "10px";

let tdSort2Delete = document.createElement("button");
tdSort2.appendChild(tdSort2Delete);
tdSort2Delete.innerHTML = "delete";

