//参加者メイン画面移動ボタンの確認ダイアログ
function Jump(){
  ret = confirm("参加者メイン画面に移動します。よろしいですか？");
  if (ret == true){
    location.href="entrant_mainmenu.html";
  }
}

