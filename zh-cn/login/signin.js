// function check(thisform) {
 
// 	var name=document.getElementById("name").value;  //读取表单数据，创建变量
// 	var pass=document.getElementById("pass").value;
// 	if (name=="admin" && pass=="123456" || name=="admin2" && pass=="456789") {  
//         //验证变量。此处设置账号、密码（可设置多组，用||隔开）
// 		alert("登录成功！欢迎" + name);
// 		window.location.href = "../adminpanel/index.html"
// 		window.document.f.action="../adminpanel/index.html?name="+name;  //此处设置登录后跳转页面
// 		window.document.f.submit();
// 	}
// 	if (name=="show" && pass=="123456") {
// 		alert("登录成功！欢迎" + name);
// 		window.document.f.action="../adminpanel/index.html?name="+name;   //此处设置登录后跳转页面
// 		window.document.f.submit();
// 	}
// 	else{
// 		alert("用户名或密码错误！");
// 	}
 
// }

function judge() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "123456") {
		window.location.href = "success.html"
    } else {
        alert("用户名或密码错误")
        event.preventDefault();
    }

}