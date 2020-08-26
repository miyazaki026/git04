//選択ボタンの確認ダイアログ
function boothjoincheck(){
  ret = confirm("説明会選択画面に移動します。よろしいですか？");
  if (ret == true){
    window.alert("説明会選択画面に移動しました。");
    location.href("briefing_session_selection.html");
  }else{
    window.alert("説明会の情報の取得に失敗しました。");
    return false;
  }
}

function uploadjoincheck(){
  ret = confirm("動画アップロード画面に移動します。よろしいですか？");
  if (ret == true){
    window.alert("動画アップロード画面に移動しました。");
  }
}

function musicjoincheck(){
  ret = confirm("音声機器設定画面に移動します。よろしいですか？");
  if (ret == true){
    window.alert("音声機器設定画面に移動しました。");
  }
}

function accountjoincheck(){
  ret = confirm("アカウント情報変更画面に移動します。よろしいですか？");
  if (ret == true){
    window.alert("アカウント情報変更画面に移動しました。");
    location.href("changeRegist.html");
  }
}