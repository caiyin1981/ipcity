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
  		alert("�ύʧ��");
		},  
		success: function(data) {  
  	  alert("�ύ�ɹ������ǻᾡ�������ϵ");
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
		alert("��������Ϊ��");
		document.getElementById('name').focus();
	}
	else if (email==null||email=='') {
		alert("Email����Ϊ��");
		document.getElementById('email').focus();
	}
	else if (mobile==null||mobile=='') {
		alert("�ֻ����벻��Ϊ��");
		document.getElementById('mobile').focus();
	}
	else if (demo==null||demo=='') {
		alert("��Ʒ��ַ����Ϊ��");
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
		alert("�ֻ������ʽ����");
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
		alert("�����ʼ���ַ��ʽ����");
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
		alert("��Ʒ��ַ��ʽ����");
		document.getElementById('demo').value="http://";
		document.getElementById('demo').focus();
	}
	
	return flag;
	
}

