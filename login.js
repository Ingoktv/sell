function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == null || username == "") {
        alert("กรุณากรอก Username");
        return false;
    }
    if (password == null || password == "") {
        alert("กรุณากรอก Password");
        return false;
    }
    alert ("ยินดีต้อนรับเข้าสู่ระบบ");
}
