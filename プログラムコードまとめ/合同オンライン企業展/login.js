function check(){
//not(空欄or空欄)の形で条件式を作成。
  if (!(login.username.value == "" || login.password.value == "")){
    ret = confirm("ログインに進みます。よろしいですか？");
    if (ret == true){
	window.alert("ログインしました。");
	location.href = "entrant_mainmenu.html";
    }
  }else{
    window.alert("必要項目が入力されていません。");
    return false;
  }
}

//新規登録の関数
function newcheck(){
  ret = confirm("新規登録を行いますか？");
  if (ret == true){
    window.alert("アカウント登録画面に移動します。");
    location.href("accountRegist.html");
  }
}

//パスワード忘れたの関数
function passcheck(){
  ret = confirm("パスワードを確認しますか？");
  if (ret == true){
    window.alert("パスワード画面に移動します。");
    location.href("pass_setting.html");
  }
}