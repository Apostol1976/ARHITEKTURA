function Validate(obj) 
{
	var user = obj.username.value;
	var pass = obj.password.value;
	var repas = obj.repeat.value;
	var mail = obj.mail.value;
	var errors="";
	
	if (user==""|| pass==""|| repas==""|| mail=="")
	{
		alert("Заполните все поля!!!");
		return false;
	}

	if(pass.length < 8)
	{
		errors+="Минимальный пароль 8 символов!!!\n";
	}

	if(pass!=repas){
		errors+="Пароли не совпадают!!!\n";
	}
	var reg = /^\S+@\S+\.\S+/i
	if(!reg.test(mail)){
		errors+="Не корректный е-маил!!!\n";
	}
	if(errors=="")
	{
		alert("Регистрация прошла успешно!!!");
		return true;
	}
	else{
		alert(errors);
		return false;
	}

}