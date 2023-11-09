const btn = document.querySelectorAll('.products .add-cart');
const tong = document.getElementsByClassName(".total-price").innerText;
// them vao gio hang
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target //khi click thi chon dung vao doi tuong
        var product = btnItem.parentElement;
        var produtName = product.querySelector("H1").innerText;
        var productImg = product.querySelector("img").src;
        var productPrice = product.querySelector("p").innerText;
        addcart(produtName,productImg,productPrice);
    })
});
var check = document.getElementById("tbl")

function addcart(produtName, productImg, productPrice) {
    var addtr = document.createElement("tr");
    var trContent = '<tr>< td style = "display: flex;align-items: center; flex-wrap: wrap;" ><img src="'+productImg+'" style="width: 250px;"><h4 style="margin-left: 10px;">'+produtName+'</h4></td><td ><span style="color: rgb(255, 0, 0); font-weight: bold;font-size: 20px;">'+productPrice+'</span></td><td style="width: 300px; font-size: large;"><input type="number" name="" id="number" min="1" value="1" style="outline: none; width: 50px;height: 50px;font-size: x-large;"></td><td><span style="font-size: 20px;cursor: pointer;">Xoá</span></td></tr > ';
    addtr.innerHTML = trContent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr)
    console.log(trContent)
}
//--------------------------------------------------------------------------------------------------
//                                         các thông báo
//--------------------------------------------------------------------------------------------------
function addAlert() {
    alert('Thêm vào giỏ hàng thành công');
    location.assign("cart.html");
}
function al() {
    alert("Sended");
}
//--------------------------------------------------------------------------------------------------
//                                         check 
//--------------------------------------------------------------------------------------------------
function lh() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (name.trim() == '' || email.trim() == '' || phone.trim() == '') { alert('Tất cả các ô nhập liệu không được để trống dữ liệu'); }
    else if (name.trim().length > 50 || name.search(/[0-9]/) !== -1) { alert('Họ và tên không nhập nhiều hơn 50 ký tự, không chứa ký tự số'); }
    else if (isNaN(phone) == true) { alert('Điện thoại phải được viết bằng số'); }
    else if (email.includes('@' && '.') == false) { alert('Email phải chứa @ và dấu chấm'); }
    else { alert('Phản hồi thành công'); }
}
//--------------------------------------------------------------------------------------------------
//                                         chuuyen huong
//--------------------------------------------------------------------------------------------------
function buy() {
    location.assign("thanhtoan.html");
}
function buy1() {
    alert('Đặt hàng thành công 🤩')
    location.assign("Index.html");
}
//--------------------------------------------------------------------------------------------------
//                                         tang giam
//--------------------------------------------------------------------------------------------------
function tru() {

    var t = document.getElementById("num").value;
    if (parseInt(t) > 0) {
        document.getElementById("num").value = parseInt(t) - 1;
    }
}
function cong() {
    var t = document.getElementById("num").value;
    document.getElementById("num").value = parseInt(t) + 1
}
//--------------------------------------------------------------------------------------------------
//                                         thay doi
//--------------------------------------------------------------------------------------------------

const btn3 = document.querySelectorAll('.btn-change');

btn3.forEach(function (button, index) {
    button.addEventListener("mouseover", function (event) {
        var btnItem = event.target //khi click thi chon dung vao doi tuong
        var product = btnItem.parentElement;
        var btnImg = product.querySelector('img').src;
        changeImg(btnImg);
    })
});
btn3.forEach(function (button, index) {
    button.addEventListener("mouseout", function (event) {
        var btnItem = event.target //khi click thi chon dung vao doi tuong
        var product = btnItem.parentElement;
        var btnImg = product.querySelector('img').src;
        backImg(btnImg);
    })
});
function backImg(btnImg) {
    document.getElementById("in-img").src = 'assets/anvathanquoc.jpg';
}
function changeImg(btnImg) {
    document.getElementById("in-img").src = btnImg;
}
//--------------------------------------------------------------------------------------------------
//                                         select addr
//--------------------------------------------------------------------------------------------------