//入力チェック
function check(){
	if (registForm.userid.value == "" || registForm.username.value == ""){
		
		alert("必要項目が入力されていません。");
		return false;
		
        }else if(registForm.name.value == "" || registForm.pass.value == ""){

		alert("必要項目が入力されていません。");
		return false;

	}else if(registForm.checkpass.value == "" || registForm.mail.value == ""){

		alert("必要項目が入力されていません。");
		return false;

	}else if(registForm.pass.value != registForm.checkpass.value){

		alert("2つのパスワードが一致しません。");
		return false;

	}else{

		ret = confirm("この入力内容で登録します。よろしいですか？");
		if (ret == true){
			alert("登録が完了しました。ログイン画面に戻ります。");
  		}

	}
}
