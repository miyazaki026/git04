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
