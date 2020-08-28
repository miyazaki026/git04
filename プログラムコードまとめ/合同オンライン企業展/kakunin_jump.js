function kakunin(){
  ret = confirm("アバターが確定されます。よろしいですか？");
  if (ret == true){
    alert("アバターを確定しました。ログイン画面へ戻ります。");
    location.href = "login_screen.html";
  }
}
