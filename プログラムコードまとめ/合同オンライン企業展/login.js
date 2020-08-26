function check(){
//not(空欄or空欄)の形で条件式を作成。
  if (!(login.username.value == "" || login.password.value == "")){
    ret = confirm("ログインに進みます。よろしいですか？");
    if (ret == true){
	alert("ログインしました。");
	location.href = "entrant_mainmenu.html";
    }
  }else{
    alert("必要項目が入力されていません。");
    return false;
  }
}

//新規登録の関数
function newcheck(){
  ret = confirm("新規登録を行いますか？");
  if (ret == true){
    alert("アカウント登録画面に移動します。");
    location.href("accountRegist.html");
  }
}

//パスワード忘れたの関数
function passcheck(){
  ret = confirm("パスワードを確認しますか？");
  if (ret == true){
    alert("パスワード再設定画面に移動します。");
  }
}