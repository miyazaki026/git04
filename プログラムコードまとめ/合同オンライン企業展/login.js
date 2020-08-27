function check(){
  
  //どちらもkigyouなら企業側ログインページへ
  if(login.username.value == "kigyou" || login.password.value == "kigyou"){
    alert("企業としてログインしました。");
    location.href = "organizer_mainmenu.html";
  }

  //どちらもsannkaなら参加者側ログインページへ
  else if(login.username.value == "sannka" || login.password.value == "sannka"){
    alert("参加者としてログインしました。");
    location.href = "entrant_mainmenu.html";
  }

  //それ以外で何か入力されているなら
  else if(!(login.username.value == "" || login.password.value == "")){
    location.href = "loginMiss.html";
  }else if (!(login.username.value == "" || login.password.value == "")){
    ret = confirm("ログインに進みます。よろしいですか？");
    if (ret == true){
	window.alert("ログインしました。");
	location.href = "entrant_mainmenu.html";
    }
  }else{
    window.alert("必要項目が入力されていません。");
    return false;
  }

  //空欄があれば
  else{
    alert("必要項目が入力されていません。");
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