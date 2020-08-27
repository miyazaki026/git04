//パスワードを忘れた時、メールアドレスに送信する画面
function sending(){
  //空欄の条件
  if (password.adress.value==""){
    window.alert("必要項目が入力されていません。");
  }else{
    ret = confirm("このメールアドレスに送信します。よろしいですか？");
    if (ret == true){
      //メールアドレスがadressなら送信可能、それ以外は送信不可
      if (password.adress.value=="adress"){
        window.alert("メールアドレス宛に送信しました。");
　　  }else{
        window.alert("メールアドレス宛に送信できませんでした。");
        window.alert("メールアドレスをもう一度確認して、再度送信してください。");
      }        
    }else{
      window.alert("送信を取りやめました");
      return false;
    }
  }
}