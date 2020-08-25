function check(){
  if (!(login.username.value == "" || login.password.value == "")){
    ret = confirm("ログインに進みます。よろしいですか？");
    if (ret == true){
      window.alert("ログインに進みます。");
    }else{
      window.alert("ログインできませんでした。");
    }
  }else{
    window.alert("必要項目が入力されていません。");
    return false;
  }
}

function newcheck(){
  ret = confirm("新規登録を行いますか？");
  if (ret == true){
    alert("アカウント登録画面に移動します。");
  }
}

function passcheck(){
  ret = confirm("パスワードを確認しますか？");
  if (ret == true){
    alert("パスワード再設定画面に移動します。");
  }
}