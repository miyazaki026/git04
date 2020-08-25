function check(){
	if (changeForm.username.value == "" && changeForm.mail.value == ""){
		if(changeForm.nowpass.value == "" || changeForm.newpass.value == ""){
			alert("必要項目が入力されていません。");
			return false;
		}else{
			ret = confirm("登録情報を変更します。よろしいですか？");
			if (ret == true){
				alert("更新が完了しました。");
  			}
		}
        }else{
		ret = confirm("登録情報を変更します。よろしいですか？");
		if (ret == true){
			alert("更新が完了しました。");
  		}
	}

}