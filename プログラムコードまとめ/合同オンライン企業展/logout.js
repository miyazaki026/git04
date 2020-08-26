//ログアウトボタンの確認ダイアログ
function check(){
  ret = confirm("ログアウトします。よろしいですか？");
  if (ret == true){
    window.alert("ログアウトしました。")
    location.href("logout_screen.html");
  }
}