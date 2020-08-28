//選択ボタンの確認ダイアログ
function boothjoincheck(){
  ret = confirm("説明会選択画面に移動します。よろしいですか？");
  if (ret == true){
    location.href("briefing_session_selection.html");
  }else{
    return false;
  }
}

function uploadjoincheck(){
  ret = confirm("動画アップロード画面に移動します。よろしいですか？");
  if (ret == true){
    location.href("upload_video_screen.html");
  }
}

function accountjoincheck(){
  ret = confirm("アカウント情報変更画面に移動します。よろしいですか？");
  if (ret == true){
    location.href("changeRegist.html");
  }
}