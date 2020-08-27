//入力チェック
function check(){
	//すべてmissと入力すると失敗画面へ飛ぶ
	if(registForm.userid.value == "miss" && registForm.username.value == "miss"){
		if(registForm.name.value == "miss" && registForm.pass.value == "miss"){
			if(registForm.checkpass.value == "miss" && registForm.mail.value == "miss"){
				location.href = "accountRegistMiss.html";
			}
		}
	}else if (registForm.userid.value == "" || registForm.username.value == ""){
		
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
			alert("登録が完了しました。アバター作成画面に移ります。");
			location.href = "createAvatar.html";
  		}

	}
}

//ログイン画面へ戻る確認ダイアログ
function backLogin(){
	event.preventDefault();
	ret = confirm("ログイン画面へ戻ります。よろしいですか？");
	if (ret == true){
		location.href = "login_screen.html";
	}else{
		return false;
	}
}
