//説明会選択画面へ戻る確認ダイアログ
function backBriefing(){
	event.preventDefault();
	ret = confirm("説明会選択画面へ戻ります。よろしいですか？");
	if (ret == true){
		location.href = "briefing_session_selectionK.html";
	}else{
		return false;
	}
}
