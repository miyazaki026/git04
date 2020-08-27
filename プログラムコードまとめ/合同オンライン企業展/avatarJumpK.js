//アバター編集画面移動確認ダイアログ
function avatar(){
	event.preventDefault();
	ret = confirm("アバター編集画面に移動します。よろしいですか？");
	if (ret == true){
		location.href = "avatarChangeK";
	}else{
		return false;
	}
}