function applyfor(){
	if (checkinput()==0) {
		return;
	}
	if (checkemail()==0) {
		return;
	}
	if (checkmobile()==0) {
		return;
	}
	if (checkurl()==0) {
		return;
	}
	
	$.ajax({
		cache: false,
		type : "post",
		url  : "applyfor.jsp",
  	data : $('#main-contact-form').serialize(),
  	async: false,
  	error: function(request) {  
  		alert("提交失败");
		},  
		success: function(data) {  
  	  alert("提交成功，我们会尽快和您联系");
  	  $('#main-contact-form').get(0).reset();
		}
	});
}


function checkinput(){
	var flag=0;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("mobile").value;
	var demo = document.getElementById("demo").value;
	
	if (name==null||name=='') {
		alert("姓名不能为空");
		document.getElementById('name').focus();
	}
	else if (email==null||email=='') {
		alert("Email不能为空");
		document.getElementById('email').focus();
	}
	else if (mobile==null||mobile=='') {
		alert("手机号码不能为空");
		document.getElementById('mobile').focus();
	}
	else if (demo==null||demo=='') {
		alert("作品地址不能为空");
		document.getElementById('demo').focus();
	}
	else {
		flag=1;
	}
	
	return flag;
	
}


function checkmobile() {
	var flag=0;
	var?re?=?/^1\d{10}$/;
	var mobile = document.getElementById("mobile").value;
	
	if?(re.test(mobile))?{
		flag=1;
	}
	else {
		alert("手机号码格式错误");
		document.getElementById('mobile').focus();
	}
	
	return flag;
}


function checkemail() {
	var flag=0;
	var email = document.getElementById("email").value;

	var re=/^(.+)@(.+)$/;
	var ra=email.match(re);
	if (ra==null) {
		alert("电子邮件地址格式错误");
		document.getElementById('email').focus();
	}
	else {
		flag=1;
	}
	
	return flag;
	
}


function checkurl() {
	var flag=0;
	var demo = document.getElementById("demo").value;
	
	if (demo.substr(0,7)=="http://") {
		flag=1;
	}
	else {
		alert("作品地址格式错误");
		document.getElementById('demo').value="http://";
		document.getElementById('demo').focus();
	}
	
	return flag;
	
}

