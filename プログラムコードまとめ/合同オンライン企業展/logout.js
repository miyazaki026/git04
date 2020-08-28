//ログアウトボタンの確認ダイアログ
function check(){
  ret = confirm("ログアウトします。よろしいですか？");
  if (ret == true){
    location.href("logout_screen.html");
  }
}