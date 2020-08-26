//ログイン画面移動の確認ダイアログ
function loginJump(){
  ret = confirm("ログイン画面に移動します。よろしいですか？");
  if (ret == true){
    window.alert("ログイン画面に移動しました。");
    location.href("login_screen.html");
  }
}