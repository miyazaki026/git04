//開催者メイン画面移動の確認ダイアログ
function Jump(){
  ret = confirm("開催者メイン画面に移動します。よろしいですか？");
  if (ret == true){
    window.alert("開催者メイン画面に移動しました。");
    location.href("organizer_mainmenu.html");
  }
}