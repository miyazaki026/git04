//マウスに追従する画像の位置指定
function MouseXY() {
	X=document.body.scrollLeft+event.x;
	Y=document.body.scrollTop+event.y;
	document.all["Obj_1"].style.left=X-50;
	document.all["Obj_1"].style.top=Y-40;
	document.onmousemove=MouseXY;
}

//ブース選択確認ダイアログ
function booth(){
	event.preventDefault();
	ret = confirm("この企業の説明会に参加します。よろしいですか？");
	if (ret == true){
		location.href = "boothK.html";
	}else{
		return false;
	}
}

//休憩室選択確認ダイアログ
function rest(){
	event.preventDefault();
	ret = confirm("この休憩スペースに参加します。よろしいですか？");
	if (ret == true){
		location.href = "";
	}else{
		return false;
	}
}

//メインメニューへ戻る確認ダイアログ
function mainmenu(){
	event.preventDefault();
	ret = confirm("メインメニューへ戻ります。よろしいですか？");
	if (ret == true){
		location.href = "organizer_mainmenu.html";
	}else{
		return false;
	}
}

